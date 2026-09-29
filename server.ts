import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Static images fallback
  app.use('/images', express.static(path.resolve(__dirname, 'public', 'images')));

  // Server-side Gemini API proxy route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: 'GEMINI_API_KEY is not configured on the server.'
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
        config: {
          systemInstruction: 'You are the Studio Concierge & Project Assistant for MEDAR STUDIO, an independent creative studio founded by Mohamed Amine Amarir. MEDAR STUDIO crafts bold visual direction, iconic posters, musical artwork, cinematic brand visuals, and defining art across sports, entertainment, culture, and high-impact design. You assist prospective clients with project briefs, deliverable specs, production turnaround, and studio inquiries in fluent, elegant English. Keep your answers concise, professional, refined, and helpful.'
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error('Error handling /api/chat:', err);
      res.json({ 
        text: "Thank you for reaching out to MEDAR STUDIO. We specialize in bold visual direction, iconic posters, album artwork, and high-impact design. You can share your project details directly via the brief form below or connect immediately with Mohamed Amine Amarir on WhatsApp." 
      });
    }
  });

  // Server-side AI project metadata auto-fill endpoint
  app.post('/api/ai-autofill', async (req, res) => {
    const { title, existingCategories } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title is required' });
    }

    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error('No API key configured');
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Analyze this creative studio project title: "${title}".
The studio is MEDAR STUDIO (founded by Mohamed Amine Amarir), an independent creative studio specializing in bold visual direction, iconic posters, album artwork, brand identity, and defining creative art across sports, music, culture, and entertainment (not just sport/music, but all high-impact visual design).
Available existing categories: ${JSON.stringify(existingCategories || ["Sport Design", "Music Cover", "Visual Arts", "Editorial Design", "Branding & Identity"])}.
Return a JSON object ONLY with the following keys:
{
  "category": "Pick the closest existing category if appropriate, or create a new relevant category name in English (e.g. 'Branding & Identity', 'Editorial Design', 'Visual Arts', 'Sport Design', 'Music Cover', 'Cinematic Art')",
  "discipline": "Short subtitle/discipline in English (e.g. 'Championship Matchday Poster', 'Album Art & Packaging', 'Cinematic Key Visual', 'Grand Prix Motorsport Tribute', 'Brand Visual System')",
  "summary": "One punchy, magnetic sentence in English describing the project's visual impact",
  "context": "A sophisticated, 2-3 sentence creative narrative in English explaining the design philosophy, typography, atmosphere, lighting, and textures",
  "tags": ["3 to 4 relevant tags as strings"],
  "tools": "Industry tools used (e.g. 'Adobe Photoshop, Blender, Cinema4D, Custom Typography')",
  "format": "Deliverable specs (e.g. 'Ultra HD 300 DPI Master Print + Multi-Format Digital Suite')"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text || '{}');
      return res.json(parsed);
    } catch (err: any) {
      console.warn('AI service fallback engaged for /api/ai-autofill:', err.message || err);
      
      const lower = title.toLowerCase();
      let cat = 'Visual Arts';
      let disc = 'High-Impact Key Visual';

      if (lower.includes('vs') || lower.includes('cup') || lower.includes('fc') || lower.includes('league') || lower.includes('gp') || lower.includes('fight') || lower.includes('derby') || lower.includes('match')) {
        cat = 'Sport Design';
        disc = 'Championship Matchday Key Visual';
      } else if (lower.includes('album') || lower.includes('single') || lower.includes('ep') || lower.includes('remix') || lower.includes('track') || lower.includes('vol') || lower.includes('records') || lower.includes('song')) {
        cat = 'Music Cover';
        disc = 'Official Release & Packaging';
      } else if (lower.includes('brand') || lower.includes('identity') || lower.includes('logo') || lower.includes('system')) {
        cat = 'Branding & Identity';
        disc = 'Brand Visual System & Typography';
      } else if (lower.includes('poster') || lower.includes('tour') || lower.includes('festival') || lower.includes('cinema') || lower.includes('film')) {
        cat = 'Poster Design';
        disc = 'Official Event & Tour Poster';
      }

      return res.json({
        category: cat,
        discipline: disc,
        summary: `High-impact creative direction designed for "${title}", balancing cinematic illumination, textural grit, and bespoke typographic craft.`,
        context: `Comprehensive visual identity and key artwork developed for "${title}". Explores intense chiaroscuro contrast, disciplined layout geometry, and atmospheric depth engineered for immediate visual prominence across both digital campaigns and large-scale exhibition prints.`,
        tags: [cat, "Creative Direction", "Ultra HD", "Editorial Design"],
        tools: "Adobe Photoshop, Blender, Art Retouching, Bespoke Typography",
        format: "Master Print HD 300 DPI + Multi-Platform Digital Suite"
      });
    }
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

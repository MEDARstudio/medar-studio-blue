// ==========================================================================
// MEDAR STUDIO — FRONTEND APPLICATION & SECURE STUDIO PROFILE MANAGER
// Bold Visual Direction • Iconic Posters • Defining Creative Art
// ==========================================================================

const DEFAULT_PROJECTS = [
  {
    id: 'catharsis',
    title: 'Catharsis — Album Artwork & Release',
    category: 'Music Cover',
    categorySlug: 'music-cover',
    coverImage: '/images/cover catharsis.png',
    bentoSpan: 'span-7',
    year: '2024 / 2025',
    discipline: 'Musical Creative Direction',
    tags: ['Album Artwork', 'Streaming Identity', 'Packaging & Verso'],
    summary: 'Comprehensive visual direction for the release of the "Catharsis" music project. A dark, intense, and poetic aesthetic declined into front cover, tracklist packaging, and alternative variants.',
    context: 'Conception of the official album cover and multi-format release packaging for an introspective musical masterpiece. The visual narrative balances raw shadowy textures with razor-sharp editorial typography, capturing an emotional rebirth through high-contrast chiaroscuro lighting.',
    specs: {
      type: 'Album Artwork & Release Suite',
      discipline: 'Cover Art & Music Direction',
      format: '3000 × 3000 px (300 DPI) + Back Packaging',
      tools: 'Adobe Photoshop, Digital Painting, Bespoke Typography'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Front Cover (Recto)',
        image: '/images/cover catharsis.png',
        desc: 'Official master cover optimized for major streaming platforms (Spotify, Apple Music, Deezer) and physical vinyl presses.'
      },
      {
        label: 'Back Cover (Verso)',
        image: '/images/catharsis verso.png',
        desc: 'Back packaging design integrating tracklist hierarchy, legal credits, and continuous textural atmosphere.'
      },
      {
        label: 'Alternative Variant (V2)',
        image: '/images/cover catharsis v2.png',
        desc: 'Alternative composition exploring a differing chromatic intensity and heightened luminance.'
      }
    ]
  },
  {
    id: 'ahly-miami',
    title: 'Al Ahly SC vs Inter Miami CF',
    category: 'Sport Design',
    categorySlug: 'sport-design',
    coverImage: '/images/ahly vs miami.png',
    bentoSpan: 'span-5',
    year: '2025',
    discipline: 'Matchday Key Visual / World Football',
    tags: ['Football', 'Matchday Poster', 'Studio Retouching'],
    summary: 'Conceptual matchday poster illustrating the cross-continental clash between Cairo giant Al Ahly and Florida franchise Inter Miami.',
    context: 'Dramatic composition highlighting the high-tension meeting of football cultures. Surgical athlete HDR retouching, monumental typography, and stadium lighting atmosphere engineered for global digital resonance.',
    specs: {
      type: 'Matchday Key Visual',
      discipline: 'Sports Design (Football)',
      format: 'Vertical 4:5 Social Master + Ultra HD Print',
      tools: 'Adobe Photoshop, Advanced Compositing, Color Grading'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Final Matchday Poster',
        image: '/images/ahly vs miami.png',
        desc: 'High-definition key visual spotlighting star head-to-head confrontation and global gala energy.'
      }
    ]
  },
  {
    id: 'norris-baku',
    title: 'Lando Norris — Baku GP 2025',
    category: 'Sport Design',
    categorySlug: 'sport-design',
    coverImage: '/images/norris baku 2025.png',
    bentoSpan: 'span-6',
    year: '2025',
    discipline: 'Motorsport / Formula 1',
    tags: ['Formula 1', 'Motorsport', 'Motion Blur'],
    summary: 'Cinematic tribute poster honoring Lando Norris across the high-speed street circuit of Baku.',
    context: 'Homage to pure velocity and the electric atmosphere of the Azerbaijan Grand Prix. Kinetic light trails, thermal contrasts, and contemporary editorial typography blended into an immersive speed portrait.',
    specs: {
      type: 'Grand Prix Tribute Poster',
      discipline: 'Motorsport Design (F1)',
      format: 'A2/A3 Print (300 DPI) & Multi-Social Formats',
      tools: 'Photoshop, Velocity FX, Custom Speed Typography'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Final F1 Poster',
        image: '/images/norris baku 2025.png',
        desc: 'Cinematic render featuring tailored studio illumination and high-velocity blur dynamics.'
      }
    ]
  },
  {
    id: 'mancity-wydad',
    title: 'Manchester City vs Wydad AC',
    category: 'Sport Design',
    categorySlug: 'sport-design',
    coverImage: '/images/man city vs wydad.png',
    bentoSpan: 'span-6',
    year: '2025',
    discipline: 'FIFA Club World Cup',
    tags: ['Football', 'Club World Cup', 'Clash of Champions'],
    summary: 'Official event visual celebrating the FIFA Club World Cup clash between Manchester City and Wydad Casablanca.',
    context: 'Highlighting the continental prestige of both football institutions. A striking two-tone chromatic grading bringing out the passion, banners, and historic crests of the supporters.',
    specs: {
      type: 'Club World Cup Visual',
      discipline: 'Sports Design (Football)',
      format: 'Vertical 4:5 + Print HD 300 DPI',
      tools: 'Photoshop, Lighting Compositing, Matchday Typography'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Final Poster',
        image: '/images/man city vs wydad.png',
        desc: 'Frontal face-off featuring team captains and respective club emblems.'
      }
    ]
  },
  {
    id: 'est-flamengo',
    title: 'EST Tunis vs CR Flamengo',
    category: 'Sport Design',
    categorySlug: 'sport-design',
    coverImage: '/images/taraji vs flamengo.png',
    bentoSpan: 'span-6',
    year: '2025',
    discipline: 'Intercontinental Showdown',
    tags: ['Football', 'Matchday Poster', 'Fiery Atmosphere'],
    summary: 'High-intensity matchday poster commemorating the competitive clash between Espérance Sportive de Tunis and CR Flamengo.',
    context: 'An incandescent color palette and dynamic ember particles reflecting the legendary fervor and fanatical stadium atmospheres of North African and South American football.',
    specs: {
      type: 'Matchday Poster',
      discipline: 'Sports Design (Football)',
      format: 'Fine Art Print & Global Digital Campaign',
      tools: 'Photoshop, Flame & Particle FX, Color Grading'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Final Matchday Poster',
        image: '/images/taraji vs flamengo.png',
        desc: 'Fiery, high-impact composition engineered for immediate scroll-stopping power.'
      }
    ]
  },
  {
    id: 'zallal-emmett',
    title: 'Zallal vs Emmett — Fight Night',
    category: 'Sport Design',
    categorySlug: 'sport-design',
    coverImage: '/images/zallal vs emmett.png',
    bentoSpan: 'span-6',
    year: '2025',
    discipline: 'Combat Sports / MMA',
    tags: ['MMA', 'Fight Night', 'Gritty Contrast'],
    summary: 'Gritty, uncompromising Fight Night poster for a championship martial collision inside the octagon.',
    context: 'Inspired by golden-age boxing posters reinterpreted through modern MMA codes: deep film grain, relentless intensity in the fighters\' gaze, and brutalist typographic hierarchy.',
    specs: {
      type: 'Fight Night Poster',
      discipline: 'Combat Sports (MMA)',
      format: 'Master Print HD 300 DPI & Promo Formats',
      tools: 'Photoshop, Monochromatic Tone FX, Brutalist Typography'
    },
    featuredOnHome: true,
    videoUrl: '',
    gallery: [
      {
        label: 'Final Fight Poster',
        image: '/images/zallal vs emmett.png',
        desc: 'Ultra-contrasted key visual translating pre-fight psychological tension.'
      }
    ]
  }
];

const DEFAULT_SETTINGS = {
  whatsappUrl: 'https://wa.me/212698048499',
  whatsappNumber: '+212 698-048499',
  email: 'medarstudio@gmail.com',
  instagramUrl: 'https://www.instagram.com/med_amine_amarir',
  xUrl: 'https://x.com/MohamedAmi39880',
  tiktokUrl: 'https://www.tiktok.com/@mohamedamineamarir',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-amine-amarir-4b4682256',
  homeLayoutMode: 'bento-asym-signature'
};

const conciergeQuickPrompts = [
  {
    q: "What formats do you deliver for album covers?",
    a: "We deliver full industry-certified streaming packages: 3000 × 3000 px, 300 DPI in sRGB color space, accompanied by social banners, animated canvas loops, and back cover tracklist packaging for physical pressings."
  },
  {
    q: "How fast can you deliver an urgent matchday poster?",
    a: "For urgent game announcements or viral moments, we offer an express 24 to 48-hour delivery window depending on current studio bookings. Comprehensive album packaging generally takes 3 to 7 business days."
  },
  {
    q: "Are the deliverables ready for large-scale physical print?",
    a: "Yes. All poster works are created in ultra-high resolution (300 DPI CMYK master profiles with proper bleed zones) calibrated for A3, A2, A1 exhibition prints, stadium LED screens, or large outdoor billboards."
  },
  {
    q: "What should I include in my creative brief?",
    a: "Simply share your key subject (athletes, match, artist, or album title), desired mood (cinematic, gritty, vintage, minimalist, high-energy), essential logos or credits, and your delivery deadline."
  }
];

// Persistent State
function getStoredProjects() {
  try {
    const raw = localStorage.getItem('medar_studio_projects_v4');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading localStorage projects:', e);
  }
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  try {
    localStorage.setItem('medar_studio_projects_v4', JSON.stringify(projects));
  } catch (e) {
    console.error('Error saving projects to localStorage:', e);
  }
}

function getStoredSettings() {
  try {
    const raw = localStorage.getItem('medar_studio_settings_v4');
    if (raw) {
      const data = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
      // Always guarantee migration to the user-requested WhatsApp number +212 698-048499
      if (!data.whatsappNumber || !data.whatsappNumber.includes('698')) {
        data.whatsappNumber = '+212 698-048499';
        data.whatsappUrl = 'https://wa.me/212698048499';
        saveSettings(data);
      }
      return data;
    }
  } catch (e) {
    console.error('Error reading settings from localStorage:', e);
  }
  return DEFAULT_SETTINGS;
}

function saveSettings(settings) {
  try {
    localStorage.setItem('medar_studio_settings_v4', JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving settings to localStorage:', e);
  }
}

// Runtime State
let projectsData = getStoredProjects();
let settingsData = getStoredSettings();
let secretClickCount = 0;
let secretClickTimer = null;
let currentView = 'home';
let isAuthenticated = false;

// Dynamic media repeater storage during new project creation
let newProjectExtraMedia = [];

// ==========================================================================
// RENDER MAIN APPLICATION
// ==========================================================================
function renderApp() {
  const root = document.getElementById('root');
  const aiContainer = document.getElementById('ai-assistant-container');
  if (!root || !aiContainer) return;

  const featuredProjects = projectsData.filter(p => p.featuredOnHome);
  const homeDisplayProjects = featuredProjects.length > 0 ? featuredProjects : projectsData.slice(0, 6);

  root.innerHTML = `
    <!-- HEADER -->
    <header class="header">
      <div class="container">
        <a href="#home" class="brand-wrapper" id="brandLogoHome">
          <div class="logo-wordmark">
            MEDAR STUDIO
            <span class="logo-tag">CREATIVE</span>
          </div>
        </a>

        <nav class="main-nav" id="mainNav">
          <ul class="nav-links-list">
            <li><a href="#home" id="navHomeLink"><span class="nav-num">01</span><span>Home</span></a></li>
            <li><a href="#work" id="navWorkLink"><span class="nav-num">02</span><span>Selected Work</span></a></li>
            <li><a href="#about" id="navAboutLink"><span class="nav-num">03</span><span>About Studio</span></a></li>
            <li><a href="#contact" id="navContactLink"><span class="nav-num">04</span><span>Contact</span></a></li>
            <li><a href="#all-projects" class="nav-cta" id="navAllProjectsLink"><span class="nav-num">05</span><span>All Projects</span><i class="fas fa-arrow-right"></i></a></li>
          </ul>

          <div class="mobile-nav-footer">
            <div class="mobile-nav-status">
              <span class="status-dot"></span>
              <span>Available for Creative Direction Worldwide</span>
            </div>
            <a href="${settingsData.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-wa-btn">
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp Direct · ${settingsData.whatsappNumber}</span>
            </a>
            <div class="mobile-nav-sub-row">
              <a href="mailto:${settingsData.email}" class="mobile-nav-email">
                <i class="fas fa-envelope"></i> ${settingsData.email}
              </a>
              <span class="mobile-nav-location"><i class="fas fa-globe"></i> GMT+1</span>
            </div>
          </div>
        </nav>

        <button class="mobile-nav-toggle" aria-label="Navigation Menu" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </header>

    <main>
      <!-- HOMEPAGE VIEW CONTAINER -->
      <div id="homeViewContainer" class="home-view" style="${currentView === 'archive' ? 'display: none;' : 'display: block;'}">
        
        <!-- HERO SECTION -->
        <section id="home" class="hero">
          <div class="container">
            <div class="hero-content">
              <div class="hero-badge">
                <span class="status-dot"></span>
                Independent Creative Direction & Visual Arts Studio
              </div>
              <h1>Visual Direction & High-Impact Design That Commands Attention.</h1>
              <p class="hero-lead">
                Independent creative studio crafting iconic posters, defining visual identities, cinematic album art, and boundary-pushing design for global brands, athletes, artists, and culture shapers.
              </p>
              <div class="hero-actions">
                <a href="#work" class="btn-primary">
                  <span>Explore Featured Work</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
                <button type="button" class="btn-secondary" id="heroOpenAllProjectsBtn">
                  <span>View Complete Archive</span>
                  <i class="fas fa-th-large"></i>
                </button>
              </div>

              <div class="hero-specialties">
                <div class="specialty-tag"><span>Iconic Posters</span></div>
                <div class="specialty-tag"><span>Creative Direction</span></div>
                <div class="specialty-tag"><span>Music & Album Art</span></div>
                <div class="specialty-tag"><span>Sports & Entertainment</span></div>
                <div class="specialty-tag"><span>Brand Aesthetics</span></div>
                <div class="specialty-tag"><span>Ultra HD 300 DPI Print</span></div>
              </div>
            </div>
          </div>
        </section>

        <!-- RECENT PROJECTS SHOWCASE -->
        <section id="work" class="section">
          <div class="container">
            <div class="section-header">
              <span class="section-label">Curated Showcase</span>
              <h2>Selected Works & Key Visuals</h2>
              <p>
                A curated selection of the studio's latest creations. Surgical retouching, dramatic composition, and uncompromising visual intensity across sports, music, and contemporary culture.
              </p>
            </div>

            <div class="portfolio-filters-wrap">
              <div class="portfolio-filters" id="homeFilters" role="tablist">
                <button class="filter-btn active" data-filter="all">All Works</button>
                <button class="filter-btn" data-filter="sport-design">Posters & Sports</button>
                <button class="filter-btn" data-filter="music-cover">Music Covers</button>
              </div>
              <div class="items-counter">Curated Selection</div>
            </div>

            <!-- Bento / Grid container with dynamic asymmetric layout class -->
            <div class="bento-grid layout-${settingsData.homeLayoutMode || 'bento-asym-signature'}" id="homeBentoGrid">
              ${renderHomeCards(homeDisplayProjects)}
            </div>

            <!-- ATTRACTIVE BANNER TO VIEW ALL PROJECTS -->
            <div class="archive-cta-banner">
              <div class="archive-banner-content">
                <div class="archive-banner-badge">
                  <i class="fas fa-layer-group"></i> Full Studio Archive
                </div>
                <h3>Explore Our Complete Repertoire of Visual Works</h3>
                <p>
                  Browse through every matchday poster, music release artwork, cinematic motorsport visual, and custom graphic project crafted by MEDAR STUDIO.
                </p>
              </div>
              <div class="archive-banner-action">
                <button class="btn-archive-primary" id="btnOpenArchiveBanner">
                  <span>Explore All Projects</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </section>

        <!-- ABOUT / PHILOSOPHY -->
        <section id="about" class="section about-section">
          <div class="container">
            <div class="about-grid">
              <div class="about-intro-col">
                <span class="section-label">About the Studio</span>
                <h2>The Art of Visuals That Stop the Scroll</h2>
                
                <div class="about-quote-box">
                  <p>
                    “Design is far more than aesthetics: it is an uncompromising visual language that captures raw energy, cultural resonance, and emotion at a single glance.”
                  </p>
                </div>
              </div>

              <div class="about-narrative">
                <p>
                  Founded by <strong>Mohamed Amine Amarir</strong>, <strong>MEDAR STUDIO</strong> is an independent creative studio delivering high-octane graphic design, iconic posters, and defining visual direction.
                </p>
                <p>
                  In an overwhelming digital stream, we build distinct visual landmarks celebrated for their cinematic grit, bespoke typographic craft, and obsessive attention to detail across sports, music, brand identity, and visual culture.
                </p>

                <div class="craft-pillars">
                  <div class="craft-card">
                    <h4><i class="fas fa-bolt"></i> Instant Visual Impact</h4>
                    <p>Compositions engineered to arrest attention within the first second on global feeds or large-scale physical exhibitions.</p>
                  </div>
                  <div class="craft-card">
                    <h4><i class="fas fa-layer-group"></i> Ultra-HD Master Deliverables</h4>
                    <p>Flawless files ready for 300 DPI fine-art prints, stadium billboards, and certified streaming platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CREATIVE INQUIRY & DIRECT COLLABORATIONS (NEW BESPOKE DIRECTION) -->
        <section id="contact" class="section collaboration-section">
          <div class="container">
            
            <div class="collab-header-block">
              <div class="collab-status-line">
                <span class="live-status-dot"></span>
                <span class="status-text">Studio Availability: Accepting Select Commissions</span>
                <span class="status-divider">·</span>
                <span class="status-sub">Direct response within 2–4 hours</span>
              </div>
              <h2 class="collab-headline">Start a Collaboration That Commands Attention.</h2>
              <p class="collab-subtitle">
                Have a marquee matchday, album launch, tour announcement, or visual campaign? 
                Connect directly with founder & art director Mohamed Amine Amarir, or configure your project details below.
              </p>
            </div>

            <div class="collab-main-grid">

              <!-- LEFT: THE VIP STUDIO DESK (DIRECT CONTACT & RAPID CHANNELS) -->
              <div class="studio-desk-card">
                <div class="desk-director-profile">
                  <div class="director-avatar">MA</div>
                  <div class="director-meta">
                    <span class="director-role">Founder & Creative Director</span>
                    <h3 class="director-name">Mohamed Amine Amarir</h3>
                    <span class="director-location"><i class="fas fa-globe-americas"></i> Remote Worldwide · GMT+1</span>
                  </div>
                </div>

                <!-- Priority WhatsApp Hotlink Card -->
                <div class="direct-hotline-box">
                  <div class="hotline-headline-row">
                    <div class="hotline-badge-text"><i class="fab fa-whatsapp"></i> Priority WhatsApp Desk</div>
                    <span class="hotline-fastest-tag">Instant Dialogue</span>
                  </div>
                  <p class="hotline-text">
                    For pressing timelines, immediate quotes, or visual references. Talk directly with Mohamed.
                  </p>

                  <a href="${settingsData.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-priority" id="contactPriorityWhatsApp">
                    <i class="fab fa-whatsapp"></i>
                    <span>Chat on WhatsApp (${settingsData.whatsappNumber})</span>
                  </a>

                  <!-- Quick topic pre-fill triggers -->
                  <div class="hotline-quick-topics">
                    <span class="quick-topics-label">Quick Inquiries (1-Click WhatsApp):</span>
                    <div class="quick-topics-grid">
                      <button type="button" class="quick-topic-btn" data-wa-topic="Sports & Matchday Poster">
                        <i class="fas fa-futbol"></i> Sports Poster
                      </button>
                      <button type="button" class="quick-topic-btn" data-wa-topic="Album & Music Artwork">
                        <i class="fas fa-compact-disc"></i> Album Artwork
                      </button>
                      <button type="button" class="quick-topic-btn" data-wa-topic="Key Visual & Tour Poster">
                        <i class="fas fa-bolt"></i> Key Visual
                      </button>
                      <button type="button" class="quick-topic-btn" data-wa-topic="Brand Identity & Direction">
                        <i class="fas fa-gem"></i> Brand Identity
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Direct Studio Channels -->
                <div class="studio-channels-list">
                  <div class="channel-row">
                    <div class="channel-icon-wrap"><i class="fas fa-envelope"></i></div>
                    <div class="channel-info">
                      <span class="channel-title">Direct Studio Email</span>
                      <a href="mailto:${settingsData.email}" class="channel-link" id="contactStudioEmailLink">${settingsData.email}</a>
                    </div>
                    <button type="button" class="channel-copy-btn" id="btnCopyEmail" aria-label="Copy email">
                      <i class="fas fa-copy"></i>
                      <span>Copy</span>
                    </button>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon-wrap"><i class="fab fa-instagram"></i></div>
                    <div class="channel-info">
                      <span class="channel-title">Studio Instagram</span>
                      <a href="${settingsData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="channel-link" id="contactStudioInstaLink">@med_amine_amarir</a>
                    </div>
                    <a href="${settingsData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="channel-ext-btn" id="contactStudioInstaBtn" aria-label="Visit Instagram">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>

                <!-- Studio Quality Standards -->
                <div class="studio-standards-box">
                  <div class="standard-item">
                    <i class="fas fa-check"></i>
                    <span><strong>100% Bespoke Artistry:</strong> Tailored concepts, authentic typography, and cinematic grit. Zero templates.</span>
                  </div>
                  <div class="standard-item">
                    <i class="fas fa-check"></i>
                    <span><strong>Production Master Quality:</strong> Ultra-HD 300 DPI CMYK masters for physical print & certified streaming assets.</span>
                  </div>
                  <div class="standard-item">
                    <i class="fas fa-check"></i>
                    <span><strong>Pre-Release Confidentiality:</strong> Strict NDA compliance for undisclosed drops, transfers, or launches.</span>
                  </div>
                </div>
              </div>

              <!-- RIGHT: THE INTERACTIVE BRIEF COMPOSER (NOT A DULL FORM) -->
              <div class="brief-composer-card">
                <div class="composer-header">
                  <span class="composer-kicker">Interactive Project Composer</span>
                  <h3 class="composer-title">Compose Your Creative Brief</h3>
                  <p class="composer-lead">Select your parameters and dispatch either straight to WhatsApp or via our studio desk.</p>
                </div>

                <form id="briefForm" action="https://formspree.io/f/meokznrv" method="POST" novalidate>
                  <input type="hidden" name="project_focus" id="hiddenProjectType" value="Sports & Matchday Poster" />
                  <input type="hidden" name="deliverable_format" id="hiddenDeliverableFormat" value="Complete Suite (Print + Digital)" />
                  <input type="hidden" name="turnaround_timeline" id="hiddenTurnaroundTimeline" value="Standard (1 to 2 Weeks)" />

                  <!-- Parameter 1: Project Focus / Canvas (Tactile Selector) -->
                  <div class="composer-param-group">
                    <label class="composer-param-label">1. Project Focus</label>
                    <div class="composer-options-grid" id="projectTypeGrid">
                      <button type="button" class="composer-option-card active" data-value="Sports & Matchday Poster">
                        <i class="fas fa-futbol"></i>
                        <span>Sports & Matchday</span>
                      </button>
                      <button type="button" class="composer-option-card" data-value="Album or Single Cover">
                        <i class="fas fa-compact-disc"></i>
                        <span>Album & Single Cover</span>
                      </button>
                      <button type="button" class="composer-option-card" data-value="Key Visual / Tour Poster">
                        <i class="fas fa-bolt"></i>
                        <span>Key Visual / Event</span>
                      </button>
                      <button type="button" class="composer-option-card" data-value="Brand Identity & Direction">
                        <i class="fas fa-layer-group"></i>
                        <span>Brand & Visual Pack</span>
                      </button>
                      <button type="button" class="composer-option-card" data-value="Bespoke Creative Direction">
                        <i class="fas fa-palette"></i>
                        <span>Bespoke Creative Art</span>
                      </button>
                    </div>
                  </div>

                  <!-- Parameter 2: Format & Output -->
                  <div class="composer-param-group">
                    <label class="composer-param-label">2. Master Deliverable Output</label>
                    <div class="composer-options-row" id="deliverableFormatRow">
                      <button type="button" class="composer-chip-btn" data-value="Digital (Streaming / Socials)">
                        Digital (Streaming / Social)
                      </button>
                      <button type="button" class="composer-chip-btn" data-value="Ultra HD Print (300 DPI CMYK)">
                        Ultra HD Print (300 DPI)
                      </button>
                      <button type="button" class="composer-chip-btn active" data-value="Complete Suite (Print + Digital)">
                        Complete Suite (Print + Digital)
                      </button>
                    </div>
                  </div>

                  <!-- Parameter 3: Timeline Urgency -->
                  <div class="composer-param-group">
                    <label class="composer-param-label">3. Target Turnaround Schedule</label>
                    <div class="composer-options-row" id="turnaroundRow">
                      <button type="button" class="composer-chip-btn urgency-btn" data-value="Express Rush (< 72h)">
                        <i class="fas fa-bolt" style="color: #f59e0b;"></i> Express Rush (&lt; 72h)
                      </button>
                      <button type="button" class="composer-chip-btn active" data-value="Standard (1 to 2 Weeks)">
                        Standard (1 to 2 Weeks)
                      </button>
                      <button type="button" class="composer-chip-btn" data-value="Flexible Schedule">
                        Flexible / In Planning
                      </button>
                    </div>
                  </div>

                  <!-- Parameter 4: Direct Inputs (Clean, modern, crisp) -->
                  <div class="composer-inputs-block">
                    <div class="form-grid-2">
                      <div class="input-group">
                        <label for="name">Your Name / Organization / Artist *</label>
                        <input type="text" id="name" name="name" class="input-field" placeholder="E.g. Alex / Record Label / Club" required />
                      </div>
                      <div class="input-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" class="input-field" placeholder="contact@domain.com" required />
                      </div>
                    </div>

                    <div class="input-group">
                      <label for="phone">WhatsApp or Phone (Recommended for fastest coordination)</label>
                      <input type="tel" id="phone" name="phone" class="input-field" placeholder="+1 ... / +44 ... / +212 ..." />
                    </div>

                    <div class="input-group">
                      <label for="message">Project Vision, Subject & Key Details *</label>
                      <textarea id="message" name="message" class="input-field" rows="3" placeholder="Describe the athlete, music release, visual mood, references, or specific release date..." required></textarea>
                    </div>
                  </div>

                  <!-- DUAL ACTION DISPATCH ENGINE -->
                  <div class="composer-actions-grid">
                    <button type="button" class="btn-dispatch-wa" id="btnDispatchWhatsApp">
                      <i class="fab fa-whatsapp"></i>
                      <span>Send Brief via WhatsApp (Fastest)</span>
                    </button>

                    <button type="submit" class="btn-dispatch-submit" id="submitBtn">
                      <i class="fas fa-paper-plane"></i>
                      <span>Submit Official Studio Brief</span>
                    </button>
                  </div>

                  <div class="form-feedback" id="formFeedback"></div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>

      <!-- DEDICATED ALL PROJECTS / ARCHIVE VIEW -->
      <div id="archiveViewContainer" class="all-projects-view" style="${currentView === 'archive' ? 'display: block;' : 'display: none;'}">
        <div class="container">
          <div class="archive-top-bar">
            <button class="btn-back-home" id="btnBackToHome">
              <i class="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </button>

            <div class="archive-search-box">
              <i class="fas fa-search"></i>
              <input type="text" id="archiveSearchInput" placeholder="Search by athlete, club, album, keyword..." autocomplete="off" />
            </div>
          </div>

          <div class="section-header">
            <h2>All Studio Projects</h2>
            <p class="archive-lead-blue">Explore our complete collection of matchday posters, album artwork, editorial layouts, and bespoke visual art.</p>
          </div>

          <div class="portfolio-filters-wrap">
            <div class="portfolio-filters" id="archiveFilters">
              <button class="filter-btn active" data-filter="all">All Works</button>
              <button class="filter-btn" data-filter="sport-design">Posters & Sports</button>
              <button class="filter-btn" data-filter="music-cover">Music Covers</button>
            </div>
            <div class="items-counter" id="archiveFilterStatus">3-Square Gallery • Click any artwork to view details</div>
          </div>

          <div class="archive-grid" id="archiveGrid">
            ${renderArchiveCards(projectsData)}
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER WITH TOTALLY SILENT SECRET TRIGGER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <!-- SECRET TRIGGER: Click 5 times silently on MEDAR STUDIO below to open Login Prompt -->
            <div class="logo-wordmark" id="footerSecretTrigger">
              MEDAR STUDIO
            </div>
            <p>
              Independent creative studio. High-impact visual direction, iconic posters, and defining creative art.
            </p>
          </div>

          <div class="footer-social-links" id="footerSocialsContainer">
            <a href="${settingsData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="${settingsData.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="${settingsData.xUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="X"><i class="fab fa-x-twitter"></i></a>
            <a href="${settingsData.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="${settingsData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} MEDAR STUDIO. All rights reserved.</p>
          <p>Crafted with distinction by Mohamed Amine Amarir.</p>
        </div>
      </div>
    </footer>

    <!-- CASE STUDY PROJECT MODAL -->
    <div id="projectModal" class="project-modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="modal-dialog">
        <button class="modal-close-btn" aria-label="Close modal">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-media-wrap">
          <div id="modalMediaDisplayArea" style="width: 100%; display: flex; justify-content: center; align-items: center;">
            <img id="modalImg" class="modal-preview-img" src="" alt="" />
          </div>
          <div id="modalGallerySwitcher" class="modal-view-switcher" style="display: none;"></div>
        </div>

        <div class="modal-content-wrap">
          <div>
            <div class="modal-meta-top">
              <span id="modalCategory" class="modal-category-badge"></span>
              <span id="modalYear" class="modal-year"></span>
            </div>
            <h2 id="modalTitle" class="modal-title"></h2>
            <p id="modalNarrative" class="modal-narrative"></p>

            <div class="modal-specs-list">
              <div class="spec-item">
                <span class="spec-label">Discipline</span>
                <span id="specDiscipline" class="spec-val"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Format / Output</span>
                <span id="specFormat" class="spec-val"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Deliverables</span>
                <span id="specType" class="spec-val"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Tools & Techniques</span>
                <span id="specTools" class="spec-val"></span>
              </div>
            </div>
          </div>

          <div class="modal-cta-box">
            <button id="modalOrderSimilarBtn" class="btn-primary" style="flex: 1; justify-content: center;">
              <span>Commission a Similar Visual</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SECRET LOGIN MODAL -->
    <div id="loginModal" class="login-modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="login-card" id="loginCard">
        <div class="login-icon-wrap">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>Private Studio Space</h3>
        <p>Please enter your private credentials to access studio administration.</p>

        <form id="secretLoginForm">
          <div class="input-group" style="text-align: left; margin-bottom: 14px;">
            <label for="loginUser">Username</label>
            <input type="text" id="loginUser" class="input-field" required autocomplete="off" />
          </div>

          <div class="input-group" style="text-align: left; margin-bottom: 20px;">
            <label for="loginPass">Password</label>
            <input type="password" id="loginPass" class="input-field" required autocomplete="off" />
          </div>

          <div class="login-error-msg" id="loginErrorMsg">
            Incorrect username or password.
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 13px;">
            <i class="fas fa-key"></i> Unlock Access
          </button>
        </form>
      </div>
    </div>

    <!-- SECRET ADMIN PROFILE MODAL (AFTER AUTHENTICATION) -->
    <div id="adminModal" class="admin-modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="admin-panel">
        <div class="admin-header">
          <div class="admin-header-title">
            <span class="admin-badge"><i class="fas fa-lock-open"></i> Private Studio Portal</span>
            <h3>MEDAR STUDIO Administration & Manager</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <button class="btn-secondary" id="adminLogoutBtn" style="padding: 6px 14px; font-size: 0.8rem;" title="Lock Session">
              <i class="fas fa-lock"></i> Lock
            </button>
            <button class="admin-close-btn" id="adminCloseBtn" aria-label="Close studio portal">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div class="admin-tabs">
          <button class="admin-tab-btn active" data-tab="tab-projects">
            <i class="fas fa-th-list"></i> Manage Projects & Asymmetric Layouts
          </button>
          <button class="admin-tab-btn" data-tab="tab-add-project">
            <i class="fas fa-plus-circle"></i> Add New Project (AI Auto-Fill & Multi-Media)
          </button>
          <button class="admin-tab-btn" data-tab="tab-settings">
            <i class="fas fa-cog"></i> WhatsApp, Contacts & Socials
          </button>
        </div>

        <div class="admin-body">
          <!-- TAB 1: MANAGE PROJECTS, REORDER & LAYOUT MODES -->
          <div class="admin-tab-pane active" id="tab-projects">
            
            <!-- SECTION FORMES DE MONTER LES AFFICHES SUR L'ACCUEIL (BENTO ASYMÉTRIQUE) -->
            <div class="bento-layout-picker-wrapper">
              <div class="layout-picker-header">
                <h4 style="color: #fff; margin-bottom: 6px; font-size: 1.05rem;">
                  <i class="fas fa-shapes" style="color: var(--accent-cobalt-light);"></i> Asymmetric Bento Layout Styles for Homepage
                </h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
                  Select the editorial asymmetric Bento arrangement to compose the showcase grid for your 6 featured posters.
                </p>
              </div>

              <div class="bento-formats-grid" id="adminLayoutSelector">
                <!-- Format 1 -->
                <div class="bento-format-card ${(settingsData.homeLayoutMode === 'bento-asym-signature' || settingsData.homeLayoutMode === 'bento-signature') ? 'active' : ''}" data-layout="bento-asym-signature">
                  <div class="format-card-top">
                    <span class="format-badge"><i class="fas fa-gem"></i> Bento Signature 7/5 & 4/8</span>
                    <span class="format-check"><i class="fas fa-check"></i></span>
                  </div>
                  <div class="format-schematic">
                    <div class="schema-row">
                      <span style="flex: 7;" class="highlight">7 cols (Featured)</span>
                      <span style="flex: 5;">5 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 4;">4 cols</span>
                      <span style="flex: 8;" class="highlight">8 cols (Panoramic)</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 6;">6 cols</span>
                      <span style="flex: 6;">6 cols</span>
                    </div>
                  </div>
                  <div class="format-card-desc">
                    Cinematic asymmetric alternation. Dominant focal poster on the left followed by a wide panoramic centerpiece.
                  </div>
                </div>

                <!-- Format 2 -->
                <div class="bento-format-card ${(settingsData.homeLayoutMode === 'bento-asym-monument' || settingsData.homeLayoutMode === 'bento-monument') ? 'active' : ''}" data-layout="bento-asym-monument">
                  <div class="format-card-top">
                    <span class="format-badge"><i class="fas fa-crown"></i> Monumental Hero 12</span>
                    <span class="format-check"><i class="fas fa-check"></i></span>
                  </div>
                  <div class="format-schematic">
                    <div class="schema-row">
                      <span style="flex: 12;" class="highlight">12 cols (XXL Hero Monument)</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 7;">7 cols</span>
                      <span style="flex: 5;">5 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 5;">5 cols</span>
                      <span style="flex: 7;">7 cols</span>
                    </div>
                  </div>
                  <div class="format-card-desc">
                    Project #1 showcased across the full 100% width (XXL Hero), followed by inverted tension duos (7/5 & 5/7).
                  </div>
                </div>

                <!-- Format 3 -->
                <div class="bento-format-card ${(settingsData.homeLayoutMode === 'bento-asym-cascade' || settingsData.homeLayoutMode === 'bento-cascade') ? 'active' : ''}" data-layout="bento-asym-cascade">
                  <div class="format-card-top">
                    <span class="format-badge"><i class="fas fa-layer-group"></i> Staggered Mosaic 8/4 & 5/7</span>
                    <span class="format-check"><i class="fas fa-check"></i></span>
                  </div>
                  <div class="format-schematic">
                    <div class="schema-row">
                      <span style="flex: 8;" class="highlight">8 cols</span>
                      <span style="flex: 4;">4 cols (Vertical)</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 5;">5 cols</span>
                      <span style="flex: 7;" class="highlight">7 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 7;" class="highlight">7 cols</span>
                      <span style="flex: 5;">5 cols</span>
                    </div>
                  </div>
                  <div class="format-card-desc">
                    Rhythmic staggered offset featuring elongated vertical poster frames and bold contrast breaks.
                  </div>
                </div>

                <!-- Format 4 -->
                <div class="bento-format-card ${(settingsData.homeLayoutMode === 'bento-asym-couture' || settingsData.homeLayoutMode === 'bento-editorial') ? 'active' : ''}" data-layout="bento-asym-couture">
                  <div class="format-card-top">
                    <span class="format-badge"><i class="fas fa-bolt"></i> Diagonal Haute Couture</span>
                    <span class="format-check"><i class="fas fa-check"></i></span>
                  </div>
                  <div class="format-schematic">
                    <div class="schema-row">
                      <span style="flex: 4;">4 cols</span>
                      <span style="flex: 8;" class="highlight">8 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 8;" class="highlight">8 cols</span>
                      <span style="flex: 4;">4 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 7;">7 cols</span>
                      <span style="flex: 5;">5 cols</span>
                    </div>
                  </div>
                  <div class="format-card-desc">
                    Diagonal criss-cross inversion 4/8 then 8/4, delivering a contemporary art-gallery exhibition feel.
                  </div>
                </div>

                <!-- Format 5 -->
                <div class="bento-format-card ${settingsData.homeLayoutMode === 'bento-asym-triptych' ? 'active' : ''}" data-layout="bento-asym-triptych">
                  <div class="format-card-top">
                    <span class="format-badge"><i class="fas fa-th"></i> Split & Triptych 4/4/4</span>
                    <span class="format-check"><i class="fas fa-check"></i></span>
                  </div>
                  <div class="format-schematic">
                    <div class="schema-row">
                      <span style="flex: 5;">5 cols</span>
                      <span style="flex: 7;" class="highlight">7 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 4;">4 cols</span>
                      <span style="flex: 4;">4 cols</span>
                      <span style="flex: 4;">4 cols</span>
                    </div>
                    <div class="schema-row">
                      <span style="flex: 12;" class="highlight">12 cols (Panoramic)</span>
                    </div>
                  </div>
                  <div class="format-card-desc">
                    Asymmetric opening duo, a crisp 3-square triptych line in the center, and a wide panoramic grand finale.
                  </div>
                </div>
              </div>
            </div>

            <!-- REORDER AND MANAGE PROJECTS LIST (DRAG & DROP + BUTTONS) -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <div>
                <h4 style="color: #fff; margin-bottom: 4px;">Project Order & Placement</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted);">
                  <strong>Drag & drop</strong> any project card to reorder, or use the <strong>▲ and ▼</strong> buttons. Top projects appear first!
                </p>
              </div>
              <button class="btn-primary" id="btnAdminQuickAdd" style="padding: 9px 18px; font-size: 0.85rem;">
                <i class="fas fa-plus"></i> New Project
              </button>
            </div>

            <div class="admin-table-container" id="adminProjectsList">
              ${renderAdminProjectsList(projectsData)}
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8rem; color: var(--text-muted);">Reset catalog to factory presets:</span>
              <button class="btn-secondary" id="btnResetDefaultData" style="padding: 8px 16px; font-size: 0.8rem; color: #f87171; border-color: rgba(239, 68, 68, 0.3);">
                <i class="fas fa-undo"></i> Reset to Default 6 Projects
              </button>
            </div>
          </div>

          <!-- TAB 2: ADD NEW PROJECT (WITH AI AUTO-FILL, VERSO, VIDEO, EXTRA PHOTOS) -->
          <div class="admin-tab-pane" id="tab-add-project">
            <h4 style="color: #fff; margin-bottom: 8px;">Create New Studio Showcase Project</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px;">
              Type your project title and click <strong>"Auto-Fill with AI"</strong> to generate all storytelling and specs instantly, then attach your cover, verso, extra views, or video.
            </p>

            <form id="adminAddProjectForm">
              <div class="form-grid-2">
                <div class="input-group">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <label for="newProjTitle" style="margin: 0;">Project Title / Headline *</label>
                    <button type="button" class="btn-ai-autofill" id="btnAiAutofill" title="Generate category, subtitle, summary, context and tags using AI">
                      <i class="fas fa-magic"></i> Auto-Fill with AI
                    </button>
                  </div>
                  <input type="text" id="newProjTitle" class="input-field" placeholder="E.g. Real Madrid vs FC Barcelona or Neon Genesis" required />
                </div>
                <div class="input-group">
                  <label for="newProjCategory">Category *</label>
                  <select id="newProjCategory" class="input-field" required>
                    <option value="Sport Design">Sport Design (Football, F1, Combat Sports)</option>
                    <option value="Music Cover">Music Cover (Album, Single, Streaming Art)</option>
                    <option value="Visual Arts">Visual Arts (Editorial, Key Visuals, Exhibition)</option>
                    <option value="Poster Design">Poster Design (Events, Cinema, Tour)</option>
                    <option value="Branding & Identity">Branding & Identity (Visual Systems)</option>
                  </select>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="input-group">
                  <label for="newProjDiscipline">Discipline / Subtitle *</label>
                  <input type="text" id="newProjDiscipline" class="input-field" placeholder="E.g. Championship Matchday Poster" required />
                </div>
                <div class="input-group">
                  <label for="newProjYear">Year *</label>
                  <input type="text" id="newProjYear" class="input-field" value="${new Date().getFullYear()}" required />
                </div>
              </div>

              <!-- Main Cover Image with Interactive Framing & Cropping Suite -->
              <div class="input-group">
                <label>Main Visual (Front Cover / Key Art) *</label>
                <div class="admin-file-picker" id="adminFileDropZone">
                  <i class="fas fa-cloud-upload-alt" style="font-size: 2rem; color: var(--accent-cobalt-light); margin-bottom: 8px;"></i>
                  <p style="color: #fff; font-weight: 600; font-size: 0.9rem; margin-bottom: 4px;">Click to import the main cover image</p>
                  <p style="font-size: 0.78rem; color: var(--text-muted);">PNG, JPG, WebP supported</p>
                  <input type="file" id="adminFileInput" accept="image/*" style="display: none;" />
                </div>
                <div style="margin-top: 10px; display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Or direct URL / path:</span>
                  <input type="text" id="newProjImageUrl" class="input-field" style="padding: 8px 12px; font-size: 0.85rem;" placeholder="/images/filename.png or image URL" />
                </div>

                <!-- Interactive Preview Box & Crop Toolbar -->
                <div id="newProjImagePreview" class="admin-preview-box" style="display: none; flex-direction: column; align-items: stretch; gap: 14px;">
                  <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                    <div style="position: relative; width: 92px; height: 92px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-subtle); flex-shrink: 0; background: #000;">
                      <img id="previewImgEl" src="" alt="Preview" style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <div style="flex: 1; min-width: 220px;">
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                        <span style="font-size: 0.92rem; font-weight: 700; color: #fff;">Artwork Ready</span>
                        <span id="cropStatusBadge" class="crop-status-badge" style="display: none;">
                          <i class="fas fa-check-circle"></i> Recadré
                        </span>
                      </div>
                      <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 10px;">
                        Ajustez le cadrage, zoomez et prévisualisez le rendu exact sur les cartes du site.
                      </p>
                      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <button type="button" class="btn-crop-trigger" id="btnOpenCropper">
                          <i class="fas fa-crop-alt"></i> Recadrer & Ajuster l'Aperçu
                        </button>
                        <button type="button" class="btn-crop-reset" id="btnResetCropImage" style="display: none;">
                          <i class="fas fa-undo"></i> Réinitialiser original
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Live Dual Card Simulation (See how it looks in real site components) -->
                  <div class="crop-live-simulations">
                    <div class="crop-sim-column">
                      <span class="crop-sim-label"><i class="fas fa-th-large"></i> Aperçu Grille Carrée (All Projects)</span>
                      <div class="sim-square-card">
                        <img id="simSquareImg" src="" alt="Aperçu Carré" />
                        <div class="sim-card-badge">Vignette 1:1</div>
                        <div class="sim-card-footer">
                          <span class="sim-card-cat" id="simCardCatPreview">Posters & Key Visuals</span>
                          <h5 class="sim-card-title" id="simCardTitlePreview">Titre du Projet</h5>
                        </div>
                      </div>
                    </div>

                    <div class="crop-sim-column">
                      <span class="crop-sim-label"><i class="fas fa-columns"></i> Aperçu Carte Bento (Page d'Accueil)</span>
                      <div class="sim-bento-card">
                        <img id="simBentoImg" src="" alt="Aperçu Bento" />
                        <div class="sim-card-badge">Carte Bento</div>
                        <div class="sim-card-footer">
                          <span class="sim-card-cat" id="simBentoCatPreview">Posters & Key Visuals</span>
                          <h5 class="sim-card-title" id="simBentoTitlePreview">Titre du Projet</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Extra Photos / Verso / Variants Repeater -->
              <div class="input-group" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div>
                    <label style="margin: 0; font-size: 0.95rem; font-weight: 700; color: #fff;">
                      <i class="fas fa-images"></i> Additional Views (Back Cover, Verso, Tracklist, Detail Crops)
                    </label>
                    <p style="font-size: 0.78rem; color: var(--text-muted); margin: 2px 0 0;">
                      Attach back covers (verso), alternative color variants, or process details.
                    </p>
                  </div>
                  <button type="button" class="btn-add-media-row" id="btnAddExtraMediaBtn">
                    <i class="fas fa-plus"></i> Add View
                  </button>
                </div>

                <div class="media-repeater-container" id="extraMediaContainer">
                  <!-- Dynamic rows will be inserted here -->
                </div>
              </div>

              <!-- Video Promo / Teaser Link -->
              <div class="input-group" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
                <label style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 4px;">
                  <i class="fas fa-film" style="color: var(--accent-cobalt-light);"></i> Teaser Video / Motion Reel (Optional)
                </label>
                <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px;">
                  Attach an MP4 file, or YouTube/Vimeo video URL.
                </p>
                <div style="display: flex; gap: 10px;">
                  <input type="text" id="newProjVideoUrl" class="input-field" placeholder="E.g. /images/video.mp4 or video link" />
                  <input type="file" id="newProjVideoFile" accept="video/*" style="display: none;" />
                  <button type="button" class="btn-secondary" id="btnUploadVideoFile" style="white-space: nowrap; padding: 10px 16px; font-size: 0.85rem;">
                    <i class="fas fa-upload"></i> Video File
                  </button>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="input-group">
                  <label for="newProjSpan">Card Span Format on Homepage</label>
                  <select id="newProjSpan" class="input-field">
                    <option value="span-6">Half Width Standard (50%)</option>
                    <option value="span-7">Asymmetric Major (span-7)</option>
                    <option value="span-5">Asymmetric Slender (span-5)</option>
                    <option value="span-8">Panoramic Hero (span-8)</option>
                    <option value="span-12">Full Width XXL (100%)</option>
                  </select>
                </div>
                <div class="input-group">
                  <label for="newProjTags">Tags (comma separated)</label>
                  <input type="text" id="newProjTags" class="input-field" placeholder="Football, Matchday, HD Retouch" />
                </div>
              </div>

              <div class="input-group">
                <label for="newProjSummary">Short Summary (Featured on Card) *</label>
                <input type="text" id="newProjSummary" class="input-field" placeholder="One magnetic sentence describing the artwork's impact..." required />
              </div>

              <div class="input-group">
                <label for="newProjContext">Creative Context & Narrative Storytelling *</label>
                <textarea id="newProjContext" class="input-field" rows="3" placeholder="Detail the artistic direction, lighting, composition philosophy, and technique..." required></textarea>
              </div>

              <div style="margin-bottom: 24px;">
                <label class="home-toggle-label" style="font-size: 0.95rem;">
                  <label class="switch">
                    <input type="checkbox" id="newProjFeaturedOnHome" checked />
                    <span class="slider"></span>
                  </label>
                  <span>Feature on Homepage (Top Recent Selection)</span>
                </label>
              </div>

              <button type="submit" class="btn-primary" style="padding: 14px 28px;">
                <i class="fas fa-check"></i> Publish Project to Studio Catalog
              </button>
            </form>
          </div>

          <!-- TAB 3: SETTINGS -->
          <div class="admin-tab-pane" id="tab-settings">
            <h4 style="color: #fff; margin-bottom: 8px;">Studio Contacts, WhatsApp & Social Links</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px;">
              Update your direct communication links so visitors on WhatsApp, Email, and social platforms connect with you seamlessly.
            </p>

            <form id="adminSettingsForm">
              <div class="form-grid-2">
                <div class="input-group">
                  <label for="settingWhatsAppUrl"><i class="fab fa-whatsapp" style="color: #22c55e;"></i> Direct WhatsApp Link *</label>
                  <input type="text" id="settingWhatsAppUrl" class="input-field" value="${settingsData.whatsappUrl}" required />
                </div>
                <div class="input-group">
                  <label for="settingWhatsAppNumber">WhatsApp Label / Number *</label>
                  <input type="text" id="settingWhatsAppNumber" class="input-field" value="${settingsData.whatsappNumber}" required />
                </div>
              </div>

              <div class="input-group">
                <label for="settingEmail"><i class="fas fa-envelope"></i> Studio Contact Email *</label>
                <input type="email" id="settingEmail" class="input-field" value="${settingsData.email}" required />
              </div>

              <div class="form-grid-2">
                <div class="input-group">
                  <label for="settingInstagram"><i class="fab fa-instagram"></i> Instagram Profile</label>
                  <input type="text" id="settingInstagram" class="input-field" value="${settingsData.instagramUrl}" />
                </div>
                <div class="input-group">
                  <label for="settingX"><i class="fab fa-x-twitter"></i> X / Twitter Profile</label>
                  <input type="text" id="settingX" class="input-field" value="${settingsData.xUrl}" />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="input-group">
                  <label for="settingTikTok"><i class="fab fa-tiktok"></i> TikTok Profile</label>
                  <input type="text" id="settingTikTok" class="input-field" value="${settingsData.tiktokUrl}" />
                </div>
                <div class="input-group">
                  <label for="settingLinkedIn"><i class="fab fa-linkedin"></i> LinkedIn Profile</label>
                  <input type="text" id="settingLinkedIn" class="input-field" value="${settingsData.linkedinUrl}" />
                </div>
              </div>

              <button type="submit" class="btn-primary" style="padding: 14px 28px; margin-top: 10px;">
                <i class="fas fa-save"></i> Save Studio Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Studio Interactive Cropper & Framing Modal -->
    <div id="studioCropperModal" class="cropper-modal" aria-hidden="true">
      <div class="cropper-dialog">
        <div class="cropper-dialog-header">
          <div class="cropper-dialog-title">
            <i class="fas fa-crop-alt"></i>
            <div>
              <h3>Studio Framing & Cropper</h3>
              <p>Recadrez et ajustez votre visuel pour un rendu galerie parfait</p>
            </div>
          </div>
          <button type="button" class="cropper-close-btn" id="btnCloseCropper" aria-label="Close cropper">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="cropper-dialog-body">
          <!-- Canvas Viewport with Grid Overlay -->
          <div class="cropper-canvas-wrapper" id="cropperCanvasWrapper">
            <div class="cropper-viewport" id="cropperViewport">
              <img id="cropperSourceImg" src="" alt="Source for crop" draggable="false" />
              <!-- Framing Overlay with Rule of Thirds Guides -->
              <div class="cropper-grid-overlay" id="cropperGridOverlay">
                <div class="grid-line-h line-1"></div>
                <div class="grid-line-h line-2"></div>
                <div class="grid-line-v line-1"></div>
                <div class="grid-line-v line-2"></div>
              </div>
            </div>
            <div class="cropper-drag-hint">
              <i class="fas fa-hand-rock"></i> Cliquez et glissez pour déplacer · Molette pour zoomer
            </div>
          </div>

          <!-- Controls Sidebar / Toolbar -->
          <div class="cropper-controls-panel">
            <div class="control-section">
              <label class="control-label">Ratio de Cadrage (Aspect Ratio)</label>
              <div class="aspect-ratio-selector" id="cropperRatioSelector">
                <button type="button" class="aspect-btn active" data-ratio="1:1">
                  <i class="fas fa-square"></i>
                  <span>1:1 Carré</span>
                  <small>Albums & All Projects</small>
                </button>
                <button type="button" class="aspect-btn" data-ratio="3:4">
                  <i class="fas fa-portrait"></i>
                  <span>3:4 Affiche</span>
                  <small>Poster Vertical</small>
                </button>
                <button type="button" class="aspect-btn" data-ratio="16:9">
                  <i class="fas fa-image"></i>
                  <span>16:9 Paysage</span>
                  <small>Hero & Bannières</small>
                </button>
                <button type="button" class="aspect-btn" data-ratio="free">
                  <i class="fas fa-expand"></i>
                  <span>Libre</span>
                  <small>Original</small>
                </button>
              </div>
            </div>

            <!-- Zoom Controller -->
            <div class="control-section">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label class="control-label" style="margin: 0;">Zoom de l'image</label>
                <span id="cropperZoomVal" style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cobalt-light);">100%</span>
              </div>
              <div class="zoom-slider-row">
                <button type="button" class="btn-zoom-step" id="btnZoomOut"><i class="fas fa-minus"></i></button>
                <input type="range" id="cropperZoomSlider" min="1" max="3" step="0.01" value="1" class="crop-slider" />
                <button type="button" class="btn-zoom-step" id="btnZoomIn"><i class="fas fa-plus"></i></button>
              </div>
            </div>

            <!-- Rotation / Center Controller -->
            <div class="control-section">
              <label class="control-label">Orientation & Alignement</label>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn-secondary" id="btnRotate90" style="flex: 1; padding: 8px 12px; font-size: 0.82rem;">
                  <i class="fas fa-redo"></i> Pivoter 90°
                </button>
                <button type="button" class="btn-secondary" id="btnCenterCrop" style="flex: 1; padding: 8px 12px; font-size: 0.82rem;">
                  <i class="fas fa-crosshairs"></i> Recentrer
                </button>
              </div>
            </div>

            <!-- Live Mini Preview -->
            <div class="control-section">
              <label class="control-label">Aperçu Réel du Rendu</label>
              <div class="cropper-mini-preview-wrap">
                <canvas id="cropperLivePreviewCanvas" width="220" height="220"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="cropper-dialog-footer">
          <button type="button" class="btn-secondary" id="btnCancelCropper">
            Annuler
          </button>
          <button type="button" class="btn-primary" id="btnApplyCropper">
            <i class="fas fa-check"></i> Valider et Appliquer le Recadrage
          </button>
        </div>
      </div>
    </div>

    <!-- TOAST NOTIFICATION -->
    <div id="adminToast" class="admin-toast">
      <i class="fas fa-check-circle" style="color: #22c55e;"></i>
      <span id="adminToastMsg">Changes saved successfully.</span>
    </div>
  `;

  // Render AI Concierge Widget
  aiContainer.innerHTML = `
    <div class="ai-chat-widget" id="aiChatWidget">
      <button class="chat-fab" id="chatFab" aria-label="Open Studio Concierge">
        <i class="fas fa-comment-dots"></i>
      </button>

      <div class="chat-window">
        <div class="chat-header">
          <div class="chat-header-title">
            <span class="online-indicator"></span>
            <div>
              <h4>Studio Concierge</h4>
              <p style="font-size: 0.72rem; color: var(--text-muted); margin: 0;">Briefing & creative assistant</p>
            </div>
          </div>
          <button class="chat-close-btn" id="chatCloseBtn" aria-label="Close concierge">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="chat-body" id="chatMessages">
          <div class="chat-message bot">
            Hello! I am MEDAR STUDIO's creative concierge. Have questions on turnaround times, fine art printing, matchday key visuals, or album cover packaging? Ask below.
          </div>
        </div>

        <div class="chat-quick-suggestions">
          ${conciergeQuickPrompts.map(p => `
            <button class="quick-btn" data-query="${p.q}">${p.q}</button>
          `).join('')}
        </div>

        <div class="chat-footer">
          <form class="chat-form" id="chatForm">
            <input type="text" class="chat-input" id="chatInput" placeholder="Ask about your next creative project..." required autocomplete="off" />
            <button type="submit" class="chat-send-btn" aria-label="Send">
              <i class="fas fa-arrow-up"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Attach all handlers
  setupHeader();
  setupNavigation();
  setupViewSwitching();
  setupHomeFiltering();
  setupArchiveFiltering();
  setupProjectModal();
  setupContactBriefForm();
  setupStudioConcierge();
  setupSilentSecretFooterAdmin();
  setupAdminPanelHandlers();
  setupDragAndDropReorder();
  setupLuxuryClickFeedback();
}

// ==========================================================================
// RENDER HELPERS
// ==========================================================================
function renderHomeCards(projects) {
  return projects.map(project => `
    <article 
      class="bento-card ${project.bentoSpan || 'span-6'}" 
      data-id="${project.id}" 
      data-category="${project.categorySlug}"
      tabindex="0"
      role="button"
      aria-label="View project: ${project.title}">
      
      <div class="bento-media">
        <span class="card-floating-badge">${project.discipline}</span>
        <button class="card-quick-view-btn" aria-label="Expand artwork">
          <i class="fas fa-expand"></i>
        </button>
        <img src="${encodeURI(project.coverImage)}" alt="${project.title}" loading="lazy" />
      </div>

      <div class="bento-info">
        <div>
          <div class="bento-meta-row">
            <span class="bento-category">${project.category}</span>
            <span class="bento-year">${project.year}</span>
          </div>
          <h3>${project.title}</h3>
          <p class="bento-desc">${project.summary}</p>
        </div>

        <div class="bento-tags">
          ${(project.tags || []).map(t => `<span class="bento-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function renderArchiveCards(projects) {
  if (!projects || projects.length === 0) {
    return `<div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; color: var(--text-muted);">
      <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
      No projects found matching your search.
    </div>`;
  }

  return projects.map(project => `
    <article 
      class="archive-square-card" 
      data-id="${project.id}" 
      data-category="${project.categorySlug}"
      tabindex="0"
      role="button"
      aria-label="View artwork: ${project.title}">
      
      <img src="${encodeURI(project.coverImage)}" alt="${project.title}" loading="lazy" />
      
      <div class="archive-card-overlay">
        <div class="archive-card-top">
          <span class="card-floating-badge" style="position: static;">${project.discipline}</span>
          <div class="archive-card-zoom-icon" title="Click to view high-resolution case study">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>

        <div class="archive-card-bottom">
          <span class="archive-card-meta">${project.category} • ${project.year}</span>
          <h3>${project.title}</h3>
          <div class="archive-card-click-hint">
            <i class="fas fa-expand"></i> Click to inspect full case study
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderAdminProjectsList(projects) {
  return projects.map((p, idx) => `
    <div class="admin-project-card" data-id="${p.id}" data-index="${idx}" draggable="true">
      <div class="admin-project-main">
        <div class="drag-grip-handle" title="Drag to reorder position">
          <i class="fas fa-grip-vertical"></i>
        </div>

        <!-- Reorder buttons (Move Up / Down) -->
        <div class="btn-reorder-group">
          <button class="btn-icon-move btn-move-up" data-index="${idx}" title="Move project up" ${idx === 0 ? 'disabled style="opacity: 0.25; cursor: not-allowed;"' : ''}>
            <i class="fas fa-chevron-up"></i>
          </button>
          <button class="btn-icon-move btn-move-down" data-index="${idx}" title="Move project down" ${idx === projects.length - 1 ? 'disabled style="opacity: 0.25; cursor: not-allowed;"' : ''}>
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>

        <img src="${encodeURI(p.coverImage)}" alt="${p.title}" class="admin-project-thumb" />
        
        <div class="admin-project-info">
          <h4>${p.title}</h4>
          <p>${p.category} • ${p.discipline} (${p.year})</p>
          ${p.gallery && p.gallery.length > 1 ? `<span style="font-size: 0.72rem; color: var(--accent-cobalt-light);"><i class="fas fa-layer-group"></i> ${p.gallery.length} views (front/verso)</span>` : ''}
          ${p.videoUrl ? `<span style="font-size: 0.72rem; color: #a855f7; margin-left: 8px;"><i class="fas fa-video"></i> Video attached</span>` : ''}
        </div>
      </div>

      <div class="admin-project-actions">
        <!-- Individual Card Size Selector -->
        <select class="admin-card-size-select" data-id="${p.id}" title="Homepage card span">
          <option value="span-6" ${p.bentoSpan === 'span-6' ? 'selected' : ''}>Standard Half (span-6)</option>
          <option value="span-7" ${p.bentoSpan === 'span-7' ? 'selected' : ''}>Asymmetric Major (span-7)</option>
          <option value="span-5" ${p.bentoSpan === 'span-5' ? 'selected' : ''}>Asymmetric Slender (span-5)</option>
          <option value="span-8" ${p.bentoSpan === 'span-8' ? 'selected' : ''}>Panoramic Wide (span-8)</option>
          <option value="span-4" ${p.bentoSpan === 'span-4' ? 'selected' : ''}>Editorial Compact (span-4)</option>
          <option value="span-12" ${p.bentoSpan === 'span-12' ? 'selected' : ''}>Full Width XXL (span-12)</option>
        </select>

        <!-- Featured on Home Toggle -->
        <label class="home-toggle-label" title="Show or hide from homepage featured selection">
          <label class="switch">
            <input type="checkbox" class="admin-home-toggle" data-id="${p.id}" ${p.featuredOnHome ? 'checked' : ''} />
            <span class="slider"></span>
          </label>
          <span style="font-size: 0.8rem;">Featured</span>
        </label>

        <button class="btn-icon-danger btn-delete-project" data-id="${p.id}" title="Delete project">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function showAdminToast(msg) {
  const toast = document.getElementById('adminToast');
  const toastMsg = document.getElementById('adminToastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3200);
}

// ==========================================================================
// DRAG AND DROP REORDERING
// ==========================================================================
function setupDragAndDropReorder() {
  const container = document.getElementById('adminProjectsList');
  if (!container) return;

  let draggedItem = null;

  container.querySelectorAll('.admin-project-card').forEach(card => {
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', (e) => {
      draggedItem = card;
      card.classList.add('dragging');
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', card.dataset.id || '');
      }
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      container.querySelectorAll('.admin-project-card').forEach(c => c.classList.remove('drag-over'));
      draggedItem = null;
    });

    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
      if (draggedItem && draggedItem !== card) {
        card.classList.add('drag-over');
      }
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      if (!draggedItem || draggedItem === card) return;

      const fromId = draggedItem.dataset.id;
      const toId = card.dataset.id;

      const fromIndex = projectsData.findIndex(p => p.id === fromId);
      const toIndex = projectsData.findIndex(p => p.id === toId);

      if (fromIndex !== -1 && toIndex !== -1) {
        const [movedItem] = projectsData.splice(fromIndex, 1);
        projectsData.splice(toIndex, 0, movedItem);
        saveProjects(projectsData);
        container.innerHTML = renderAdminProjectsList(projectsData);
        setupDragAndDropReorder();
        refreshViews();
        showAdminToast(`Project "${movedItem.title}" moved to position #${toIndex + 1}.`);
      }
    });
  });
}

// ==========================================================================
// ==========================================================================
// LUXURY VIEW & PAGE TRANSITION ENGINE (HAUT DE GAMME, SIMPLE, MODERNE)
// ==========================================================================
function triggerLuxuryViewTransition(callback) {
  const veil = document.getElementById('luxuryTransitionVeil');
  if (!veil) {
    if (callback) callback();
    return;
  }

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    if (callback) callback();
    return;
  }

  // Phase 1: Kinetic black & blue shapes sweep in from left to right
  veil.classList.remove('sweep-out', 'badge-visible');
  veil.classList.add('active', 'sweep-in');

  setTimeout(() => {
    veil.classList.add('badge-visible');
  }, 220);

  // Phase 2: Screen is fully masked, switch to new view
  setTimeout(() => {
    if (callback) callback();

    // Phase 3: Shapes sweep out to the right as the new page slides in from the left
    veil.classList.remove('sweep-in');
    veil.classList.add('sweep-out');

    setTimeout(() => {
      veil.classList.remove('badge-visible');
    }, 120);

    // Phase 4: Complete transition cleanup
    setTimeout(() => {
      veil.classList.remove('active', 'sweep-out');
    }, 420);
  }, 380);
}

function scrollToSectionWithLuxurySpotlight(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const header = document.querySelector('.header');
  const headerHeight = header ? header.offsetHeight : 80;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: 'smooth'
  });

  // Trigger high-end subtle spotlight glow on section
  target.classList.remove('section-spotlight-active');
  void target.offsetWidth; // trigger reflow
  target.classList.add('section-spotlight-active');

  setTimeout(() => {
    target.classList.remove('section-spotlight-active');
  }, 1600);
}

function switchView(viewName, targetSectionId = null) {
  triggerLuxuryViewTransition(() => {
    currentView = viewName;
    const homeContainer = document.getElementById('homeViewContainer');
    const archiveContainer = document.getElementById('archiveViewContainer');
    
    if (viewName === 'archive') {
      if (homeContainer) {
        homeContainer.style.display = 'none';
        homeContainer.classList.remove('view-enter-luxury');
      }
      if (archiveContainer) {
        archiveContainer.style.display = 'block';
        archiveContainer.classList.add('active', 'view-enter-luxury');
        const grid = document.getElementById('archiveGrid');
        if (grid) {
          grid.classList.remove('stagger-in');
          void grid.offsetWidth;
          grid.classList.add('stagger-in');
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      const searchInput = document.getElementById('archiveSearchInput');
      if (searchInput) searchInput.value = '';
      filterArchiveProjects('all', '');
    } else {
      if (archiveContainer) {
        archiveContainer.style.display = 'none';
        archiveContainer.classList.remove('active', 'view-enter-luxury');
      }
      if (homeContainer) {
        homeContainer.style.display = 'block';
        homeContainer.classList.add('view-enter-luxury');
      }
      if (targetSectionId) {
        setTimeout(() => {
          scrollToSectionWithLuxurySpotlight(targetSectionId);
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  });
}

function setupViewSwitching() {
  document.getElementById('navAllProjectsLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('archive');
  });

  document.getElementById('btnOpenArchiveBanner')?.addEventListener('click', () => {
    switchView('archive');
  });

  document.getElementById('heroOpenAllProjectsBtn')?.addEventListener('click', () => {
    switchView('archive');
  });

  document.getElementById('btnBackToHome')?.addEventListener('click', () => {
    switchView('home');
  });

  document.getElementById('brandLogoHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'archive') {
      switchView('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.getElementById('navHomeLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'archive') {
      switchView('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.getElementById('navWorkLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'archive') {
      switchView('home', 'work');
    } else {
      scrollToSectionWithLuxurySpotlight('work');
    }
  });

  document.getElementById('navAboutLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'archive') {
      switchView('home', 'about');
    } else {
      scrollToSectionWithLuxurySpotlight('about');
    }
  });

  document.getElementById('navContactLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'archive') {
      switchView('home', 'contact');
    } else {
      scrollToSectionWithLuxurySpotlight('contact');
    }
  });

  // Hero explore button smooth glide to work section
  document.querySelectorAll('a[href="#work"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentView === 'archive') {
        switchView('home', 'work');
      } else {
        scrollToSectionWithLuxurySpotlight('work');
      }
    });
  });
}

// ==========================================================================
// FILTERS (HOME & ARCHIVE)
// ==========================================================================
function setupHomeFiltering() {
  const filterBtns = document.querySelectorAll('#homeFilters .filter-btn');
  const cards = document.querySelectorAll('#homeBentoGrid .bento-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function filterArchiveProjects(categoryFilter, searchQuery) {
  const grid = document.getElementById('archiveGrid');
  const statusEl = document.getElementById('archiveFilterStatus');
  if (!grid) return;

  const query = (searchQuery || '').trim().toLowerCase();

  const filtered = projectsData.filter(p => {
    const matchesCat = categoryFilter === 'all' || p.categorySlug === categoryFilter;
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) ||
      p.discipline.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      (p.tags || []).some(t => t.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  grid.innerHTML = renderArchiveCards(filtered);
  grid.classList.remove('stagger-in');
  void grid.offsetWidth; // trigger reflow for smooth stagger
  grid.classList.add('stagger-in');

  if (statusEl) {
    statusEl.innerHTML = query 
      ? `Results for "${query}" • Click any artwork to view details` 
      : `3-Square Gallery • Click any artwork to view details`;
  }
}

function setupArchiveFiltering() {
  const filterBtns = document.querySelectorAll('#archiveFilters .filter-btn');
  const searchInput = document.getElementById('archiveSearchInput');

  let currentCat = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.filter;
      filterArchiveProjects(currentCat, searchInput?.value);
    });
  });

  searchInput?.addEventListener('input', () => {
    filterArchiveProjects(currentCat, searchInput.value);
  });
}

// ==========================================================================
// TOTALLY SILENT SECRET TRIGGER & CONFIDENTIAL LOGIN
// ==========================================================================
function setupSilentSecretFooterAdmin() {
  const trigger = document.getElementById('footerSecretTrigger');
  const loginModal = document.getElementById('loginModal');
  const adminModal = document.getElementById('adminModal');
  const loginForm = document.getElementById('secretLoginForm');
  const loginUser = document.getElementById('loginUser');
  const loginPass = document.getElementById('loginPass');
  const loginErrorMsg = document.getElementById('loginErrorMsg');
  const loginCard = document.getElementById('loginCard');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const adminCloseBtn = document.getElementById('adminCloseBtn');

  if (!trigger || !loginModal || !adminModal) return;

  // TOTALLY SILENT 5 CLICKS: NO NOTIFICATION OR COUNTER SHOWN!
  trigger.addEventListener('click', () => {
    secretClickCount++;
    clearTimeout(secretClickTimer);

    if (secretClickCount >= 5) {
      secretClickCount = 0;
      if (isAuthenticated) {
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        loginModal.classList.add('active');
        loginModal.setAttribute('aria-hidden', 'false');
        if (loginUser) {
          loginUser.value = '';
          loginPass.value = '';
          loginErrorMsg.style.display = 'none';
          setTimeout(() => loginUser.focus(), 100);
        }
        document.body.style.overflow = 'hidden';
      }
    } else {
      secretClickTimer = setTimeout(() => {
        secretClickCount = 0;
      }, 4000);
    }
  });

  // Handle Login submission
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = loginUser.value.trim();
    const p = loginPass.value.trim();

    // Confidential verification (both 010904)
    if (u === '010904' && p === '010904') {
      isAuthenticated = true;
      loginModal.classList.remove('active');
      loginModal.setAttribute('aria-hidden', 'true');
      adminModal.classList.add('active');
      adminModal.setAttribute('aria-hidden', 'false');
      showAdminToast("Session Unlocked.");
    } else {
      loginErrorMsg.style.display = 'block';
      loginCard.classList.add('shake');
      setTimeout(() => loginCard.classList.remove('shake'), 450);
      loginPass.value = '';
      loginPass.focus();
    }
  });

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  adminLogoutBtn?.addEventListener('click', () => {
    isAuthenticated = false;
    adminModal.classList.remove('active');
    document.body.style.overflow = '';
    showAdminToast("Session locked.");
  });

  adminCloseBtn?.addEventListener('click', () => {
    adminModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  adminModal.addEventListener('click', (e) => {
    if (e.target === adminModal) {
      adminModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ==========================================================================
// ADMIN PANEL HANDLERS (REORDER, MULTI-MEDIA, LAYOUT MODES, AI AUTO-FILL)
// ==========================================================================
function setupAdminPanelHandlers() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabPanes = document.querySelectorAll('.admin-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(btn.dataset.tab);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  document.getElementById('btnAdminQuickAdd')?.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === 'tab-add-project'));
    tabPanes.forEach(p => p.classList.toggle('active', p.id === 'tab-add-project'));
  });

  // Layout mode switcher in Admin (Rich Bento Asymmetric formats)
  const layoutCards = document.querySelectorAll('#adminLayoutSelector .bento-format-card, #adminLayoutSelector .layout-pill-btn');
  layoutCards.forEach(card => {
    card.addEventListener('click', () => {
      layoutCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const mode = card.dataset.layout;
      settingsData.homeLayoutMode = mode;
      saveSettings(settingsData);

      const homeGrid = document.getElementById('homeBentoGrid');
      if (homeGrid) {
        homeGrid.className = `bento-grid layout-${mode}`;
      }

      const badgeText = card.querySelector('.format-badge')?.textContent.trim() || card.textContent.trim();
      showAdminToast(`Montage style applied: ${badgeText}`);
    });
  });

  // REORDERING VIA MOVE BUTTONS (Move project UP or DOWN)
  document.getElementById('adminProjectsList')?.addEventListener('click', (e) => {
    const btnUp = e.target.closest('.btn-move-up');
    const btnDown = e.target.closest('.btn-move-down');

    if (btnUp) {
      const idx = parseInt(btnUp.dataset.index, 10);
      if (idx > 0) {
        const item = projectsData.splice(idx, 1)[0];
        projectsData.splice(idx - 1, 0, item);
        saveProjects(projectsData);
        document.getElementById('adminProjectsList').innerHTML = renderAdminProjectsList(projectsData);
        setupDragAndDropReorder();
        refreshViews();
        showAdminToast(`Project moved up.`);
      }
    } else if (btnDown) {
      const idx = parseInt(btnDown.dataset.index, 10);
      if (idx < projectsData.length - 1) {
        const item = projectsData.splice(idx, 1)[0];
        projectsData.splice(idx + 1, 0, item);
        saveProjects(projectsData);
        document.getElementById('adminProjectsList').innerHTML = renderAdminProjectsList(projectsData);
        setupDragAndDropReorder();
        refreshViews();
        showAdminToast(`Project moved down.`);
      }
    }
  });

  // Individual Card Size Selector change
  document.getElementById('adminProjectsList')?.addEventListener('change', (e) => {
    const select = e.target.closest('.admin-card-size-select');
    if (select) {
      const projId = select.dataset.id;
      const project = projectsData.find(p => p.id === projId);
      if (project) {
        project.bentoSpan = select.value;
        saveProjects(projectsData);
        refreshViews();
        showAdminToast(`Span format for "${project.title}" updated.`);
      }
    }
  });

  // Featured on Home Toggles
  document.getElementById('adminProjectsList')?.addEventListener('change', (e) => {
    const toggle = e.target.closest('.admin-home-toggle');
    if (toggle) {
      const projId = toggle.dataset.id;
      const project = projectsData.find(p => p.id === projId);
      if (project) {
        project.featuredOnHome = toggle.checked;
        saveProjects(projectsData);
        showAdminToast(`Artwork "${project.title}" ${toggle.checked ? 'added to' : 'removed from'} homepage.`);
        refreshViews();
      }
    }
  });

  // Delete project
  document.getElementById('adminProjectsList')?.addEventListener('click', (e) => {
    const delBtn = e.target.closest('.btn-delete-project');
    if (delBtn) {
      const projId = delBtn.dataset.id;
      const project = projectsData.find(p => p.id === projId);
      if (project && confirm(`Are you sure you want to delete "${project.title}"?`)) {
        projectsData = projectsData.filter(p => p.id !== projId);
        saveProjects(projectsData);
        document.getElementById('adminProjectsList').innerHTML = renderAdminProjectsList(projectsData);
        setupDragAndDropReorder();
        showAdminToast(`Project deleted.`);
        refreshViews();
      }
    }
  });

  // Reset to default data
  document.getElementById('btnResetDefaultData')?.addEventListener('click', () => {
    if (confirm("Reset catalog to the 6 factory default projects?")) {
      projectsData = [...DEFAULT_PROJECTS];
      saveProjects(projectsData);
      document.getElementById('adminProjectsList').innerHTML = renderAdminProjectsList(projectsData);
      setupDragAndDropReorder();
      showAdminToast("Catalog reset successfully.");
      refreshViews();
    }
  });

  // ==========================================================================
  // STUDIO IMAGE CROPPER & LIVE RE-FRAMING SUITE
  // ==========================================================================
  const dropZone = document.getElementById('adminFileDropZone');
  const fileInput = document.getElementById('adminFileInput');
  const imageUrlInput = document.getElementById('newProjImageUrl');
  const previewBox = document.getElementById('newProjImagePreview');
  const previewImgEl = document.getElementById('previewImgEl');
  const simSquareImg = document.getElementById('simSquareImg');
  const simBentoImg = document.getElementById('simBentoImg');
  const simCardTitlePreview = document.getElementById('simCardTitlePreview');
  const simBentoTitlePreview = document.getElementById('simBentoTitlePreview');
  const simCardCatPreview = document.getElementById('simCardCatPreview');
  const simBentoCatPreview = document.getElementById('simBentoCatPreview');
  const cropStatusBadge = document.getElementById('cropStatusBadge');
  const btnResetCropImage = document.getElementById('btnResetCropImage');
  const btnOpenCropper = document.getElementById('btnOpenCropper');

  // Cropper Modal Elements
  const cropperModal = document.getElementById('studioCropperModal');
  const btnCloseCropper = document.getElementById('btnCloseCropper');
  const btnCancelCropper = document.getElementById('btnCancelCropper');
  const btnApplyCropper = document.getElementById('btnApplyCropper');
  const cropperViewport = document.getElementById('cropperViewport');
  const cropperSourceImg = document.getElementById('cropperSourceImg');
  const cropperZoomSlider = document.getElementById('cropperZoomSlider');
  const cropperZoomVal = document.getElementById('cropperZoomVal');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnRotate90 = document.getElementById('btnRotate90');
  const btnCenterCrop = document.getElementById('btnCenterCrop');
  const cropperLivePreviewCanvas = document.getElementById('cropperLivePreviewCanvas');
  const cropperRatioSelector = document.getElementById('cropperRatioSelector');

  let rawOriginalImageSrc = '';
  let cropState = {
    zoom: 1,
    panX: 0,
    panY: 0,
    rotation: 0,
    ratio: '1:1'
  };

  function updateLiveSimulationCards(src) {
    if (previewImgEl) previewImgEl.src = src;
    if (simSquareImg) simSquareImg.src = src;
    if (simBentoImg) simBentoImg.src = src;
    if (previewBox) previewBox.style.display = 'flex';
  }

  function syncCardTitles() {
    const titleVal = document.getElementById('newProjTitle')?.value.trim() || 'Titre du Projet';
    const catVal = document.getElementById('newProjCategory')?.value || 'Posters & Key Visuals';
    if (simCardTitlePreview) simCardTitlePreview.textContent = titleVal;
    if (simBentoTitlePreview) simBentoTitlePreview.textContent = titleVal;
    if (simCardCatPreview) simCardCatPreview.textContent = catVal;
    if (simBentoCatPreview) simBentoCatPreview.textContent = catVal;
  }

  document.getElementById('newProjTitle')?.addEventListener('input', syncCardTitles);
  document.getElementById('newProjCategory')?.addEventListener('change', syncCardTitles);

  function handleLoadedImage(dataUrl) {
    rawOriginalImageSrc = dataUrl;
    imageUrlInput.value = dataUrl;
    cropState = { zoom: 1, panX: 0, panY: 0, rotation: 0, ratio: '1:1' };
    if (cropStatusBadge) cropStatusBadge.style.display = 'none';
    if (btnResetCropImage) btnResetCropImage.style.display = 'none';
    updateLiveSimulationCards(dataUrl);
    syncCardTitles();
  }

  dropZone?.addEventListener('click', () => fileInput?.click());

  // Drag and drop onto upload box
  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--accent-cobalt)';
    dropZone.style.background = 'rgba(37, 99, 235, 0.08)';
  });

  dropZone?.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '';
    dropZone.style.background = '';
  });

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '';
    dropZone.style.background = '';
    const file = e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => handleLoadedImage(loadEvent.target.result);
      reader.readAsDataURL(file);
    }
  });

  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => handleLoadedImage(loadEvent.target.result);
      reader.readAsDataURL(file);
    }
  });

  imageUrlInput?.addEventListener('input', () => {
    const val = imageUrlInput.value.trim();
    if (val) {
      handleLoadedImage(val);
    } else {
      if (previewBox) previewBox.style.display = 'none';
    }
  });

  // Reset to raw original image
  btnResetCropImage?.addEventListener('click', () => {
    if (rawOriginalImageSrc) {
      imageUrlInput.value = rawOriginalImageSrc;
      cropState = { zoom: 1, panX: 0, panY: 0, rotation: 0, ratio: '1:1' };
      updateLiveSimulationCards(rawOriginalImageSrc);
      if (cropStatusBadge) cropStatusBadge.style.display = 'none';
      if (btnResetCropImage) btnResetCropImage.style.display = 'none';
      showAdminToast("Image réinitialisée à l'original.");
    }
  });

  // Open Cropper Modal
  btnOpenCropper?.addEventListener('click', () => {
    const currentSrc = imageUrlInput.value.trim() || rawOriginalImageSrc;
    if (!currentSrc) {
      alert("Veuillez d'abord importer une image pour la recadrer.");
      return;
    }

    cropperSourceImg.src = currentSrc;
    cropperModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    cropperSourceImg.onload = () => {
      applyViewportAspect(cropState.ratio);
      updateCropperTransform();
      renderLiveMiniCanvas();
    };

    if (cropperSourceImg.complete) {
      applyViewportAspect(cropState.ratio);
      updateCropperTransform();
      renderLiveMiniCanvas();
    }
  });

  function closeCropperModal() {
    cropperModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  btnCloseCropper?.addEventListener('click', closeCropperModal);
  btnCancelCropper?.addEventListener('click', closeCropperModal);
  cropperModal?.addEventListener('click', (e) => {
    if (e.target === cropperModal) closeCropperModal();
  });

  function applyViewportAspect(ratio) {
    if (!cropperViewport) return;
    cropState.ratio = ratio;
    
    // Update ratio buttons active state
    cropperRatioSelector?.querySelectorAll('.aspect-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.ratio === ratio);
    });

    if (ratio === '1:1') {
      cropperViewport.style.width = '360px';
      cropperViewport.style.height = '360px';
    } else if (ratio === '3:4') {
      cropperViewport.style.width = '285px';
      cropperViewport.style.height = '380px';
    } else if (ratio === '16:9') {
      cropperViewport.style.width = '400px';
      cropperViewport.style.height = '225px';
    } else { // free
      if (cropperSourceImg.naturalWidth && cropperSourceImg.naturalHeight) {
        const aspect = cropperSourceImg.naturalWidth / cropperSourceImg.naturalHeight;
        if (aspect >= 1) {
          cropperViewport.style.width = '380px';
          cropperViewport.style.height = `${Math.round(380 / aspect)}px`;
        } else {
          cropperViewport.style.height = '380px';
          cropperViewport.style.width = `${Math.round(380 * aspect)}px`;
        }
      } else {
        cropperViewport.style.width = '360px';
        cropperViewport.style.height = '360px';
      }
    }
  }

  cropperRatioSelector?.addEventListener('click', (e) => {
    const btn = e.target.closest('.aspect-btn');
    if (btn) {
      applyViewportAspect(btn.dataset.ratio);
      updateCropperTransform();
      renderLiveMiniCanvas();
    }
  });

  function updateCropperTransform() {
    if (!cropperSourceImg) return;
    cropperSourceImg.style.transform = `translate(calc(-50% + ${cropState.panX}px), calc(-50% + ${cropState.panY}px)) scale(${cropState.zoom}) rotate(${cropState.rotation}deg)`;
    if (cropperZoomVal) cropperZoomVal.textContent = `${Math.round(cropState.zoom * 100)}%`;
    if (cropperZoomSlider) cropperZoomSlider.value = cropState.zoom;
  }

  // Zoom slider
  cropperZoomSlider?.addEventListener('input', (e) => {
    cropState.zoom = parseFloat(e.target.value);
    updateCropperTransform();
    renderLiveMiniCanvas();
  });

  btnZoomIn?.addEventListener('click', () => {
    cropState.zoom = Math.min(3, cropState.zoom + 0.15);
    updateCropperTransform();
    renderLiveMiniCanvas();
  });

  btnZoomOut?.addEventListener('click', () => {
    cropState.zoom = Math.max(1, cropState.zoom - 0.15);
    updateCropperTransform();
    renderLiveMiniCanvas();
  });

  // Wheel zoom
  cropperViewport?.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    cropState.zoom = Math.max(1, Math.min(3, cropState.zoom + delta));
    updateCropperTransform();
    renderLiveMiniCanvas();
  }, { passive: false });

  // Rotate 90
  btnRotate90?.addEventListener('click', () => {
    cropState.rotation = (cropState.rotation + 90) % 360;
    updateCropperTransform();
    renderLiveMiniCanvas();
  });

  // Center crop
  btnCenterCrop?.addEventListener('click', () => {
    cropState.panX = 0;
    cropState.panY = 0;
    cropState.zoom = 1;
    cropState.rotation = 0;
    updateCropperTransform();
    renderLiveMiniCanvas();
  });

  // Pan / Dragging
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialPanX = 0;
  let initialPanY = 0;

  function onPointerDown(e) {
    isDragging = true;
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    startX = clientX;
    startY = clientY;
    initialPanX = cropState.panX;
    initialPanY = cropState.panY;
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    const dx = clientX - startX;
    const dy = clientY - startY;
    cropState.panX = initialPanX + dx;
    cropState.panY = initialPanY + dy;
    updateCropperTransform();
    renderLiveMiniCanvas();
  }

  function onPointerUp() {
    if (isDragging) {
      isDragging = false;
      renderLiveMiniCanvas();
    }
  }

  cropperViewport?.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  cropperViewport?.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp, { passive: true });

  // Render Mini Preview Canvas and Output Canvas
  function drawFramedImageOnCanvas(canvas) {
    if (!canvas || !cropperSourceImg || !cropperViewport) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const Vw = cropperViewport.offsetWidth || 360;
    const Vh = cropperViewport.offsetHeight || 360;
    const Iw = cropperSourceImg.naturalWidth || 1000;
    const Ih = cropperSourceImg.naturalHeight || 1000;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Fill dark background
    ctx.fillStyle = '#09090c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const scaleFactor = canvas.width / Vw;

    ctx.translate(canvas.width / 2 + cropState.panX * scaleFactor, canvas.height / 2 + cropState.panY * scaleFactor);
    ctx.rotate((cropState.rotation * Math.PI) / 180);

    // Compute base image fit inside viewport (cover fit)
    const baseScale = Math.max(Vw / Iw, Vh / Ih);
    const drawW = Iw * baseScale * cropState.zoom * scaleFactor;
    const drawH = Ih * baseScale * cropState.zoom * scaleFactor;

    ctx.drawImage(cropperSourceImg, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
  }

  function renderLiveMiniCanvas() {
    if (!cropperLivePreviewCanvas) return;
    drawFramedImageOnCanvas(cropperLivePreviewCanvas);
  }

  // Validate and Apply Crop
  btnApplyCropper?.addEventListener('click', () => {
    if (!cropperSourceImg.src) return;

    // High definition export canvas
    const exportCanvas = document.createElement('canvas');
    let targetWidth = 1400;
    let targetHeight = 1400;

    if (cropState.ratio === '1:1') {
      targetWidth = 1400; targetHeight = 1400;
    } else if (cropState.ratio === '3:4') {
      targetWidth = 1200; targetHeight = 1600;
    } else if (cropState.ratio === '16:9') {
      targetWidth = 1600; targetHeight = 900;
    } else {
      const Vw = cropperViewport.offsetWidth || 360;
      const Vh = cropperViewport.offsetHeight || 360;
      targetWidth = 1400;
      targetHeight = Math.round(1400 * (Vh / Vw));
    }

    exportCanvas.width = targetWidth;
    exportCanvas.height = targetHeight;

    drawFramedImageOnCanvas(exportCanvas);

    try {
      const croppedDataUrl = exportCanvas.toDataURL('image/jpeg', 0.94);
      imageUrlInput.value = croppedDataUrl;
      updateLiveSimulationCards(croppedDataUrl);
      if (cropStatusBadge) cropStatusBadge.style.display = 'inline-flex';
      if (btnResetCropImage) btnResetCropImage.style.display = 'inline-flex';
      closeCropperModal();
      showAdminToast("✨ Visuel recadré et adapté au catalogue avec succès !");
    } catch (e) {
      console.error('Error generating cropped canvas:', e);
      alert("Une erreur est survenue lors de l'export du recadrage.");
    }
  });

  // AI Auto-Fill metadata generator
  const btnAiAutofill = document.getElementById('btnAiAutofill');
  const titleInput = document.getElementById('newProjTitle');

  btnAiAutofill?.addEventListener('click', async () => {
    const titleVal = titleInput?.value.trim();
    if (!titleVal) {
      alert("Please enter a Project Title first so the AI can analyze it.");
      titleInput?.focus();
      return;
    }

    btnAiAutofill.disabled = true;
    btnAiAutofill.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating with AI...';

    // Collect all existing categories
    const existingCats = Array.from(new Set(projectsData.map(p => p.category)));

    try {
      const res = await fetch('/api/ai-autofill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: titleVal, existingCategories: existingCats })
      });

      if (!res.ok) throw new Error('AI generation failed');
      const data = await res.json();

      // Check if proposed category exists in select, otherwise add it as new option
      const categorySelect = document.getElementById('newProjCategory');
      if (categorySelect && data.category) {
        let found = false;
        for (let i = 0; i < categorySelect.options.length; i++) {
          if (categorySelect.options[i].value.toLowerCase() === data.category.toLowerCase()) {
            categorySelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          const newOpt = document.createElement('option');
          newOpt.value = data.category;
          newOpt.textContent = `✨ ${data.category} (New)`;
          categorySelect.appendChild(newOpt);
          categorySelect.value = data.category;
        }
      }

      if (data.discipline) document.getElementById('newProjDiscipline').value = data.discipline;
      if (data.summary) document.getElementById('newProjSummary').value = data.summary;
      if (data.context) document.getElementById('newProjContext').value = data.context;
      if (data.tags && Array.isArray(data.tags)) document.getElementById('newProjTags').value = data.tags.join(', ');

      showAdminToast("✨ Project details generated & filled by AI!");
    } catch (err) {
      console.error('Error with AI auto-fill:', err);
      // Smart offline fallback
      document.getElementById('newProjDiscipline').value = 'Creative Direction & Design';
      document.getElementById('newProjSummary').value = `High-impact visual artwork created for "${titleVal}".`;
      document.getElementById('newProjContext').value = `Comprehensive art direction crafted for "${titleVal}". Developed with deep textural depth, dramatic chiaroscuro contrast, and bespoke composition designed to command immediate visual attention.`;
      document.getElementById('newProjTags').value = 'Poster Design, Creative Direction, High Impact';
      showAdminToast("Details auto-filled with studio template.");
    } finally {
      btnAiAutofill.disabled = false;
      btnAiAutofill.innerHTML = '<i class="fas fa-magic"></i> Auto-Fill with AI';
    }
  });

  // Extra Media (Verso / Variants) Repeater logic
  const extraMediaContainer = document.getElementById('extraMediaContainer');
  const btnAddExtraMedia = document.getElementById('btnAddExtraMediaBtn');

  function renderExtraMediaRows() {
    if (!extraMediaContainer) return;
    extraMediaContainer.innerHTML = newProjectExtraMedia.map((item, idx) => `
      <div class="media-repeater-item" data-index="${idx}">
        <input type="text" class="input-field extra-media-label" value="${item.label}" placeholder="Label (e.g. Back Cover / Verso)" />
        <div style="display: flex; gap: 8px;">
          <input type="text" class="input-field extra-media-url" value="${item.image}" placeholder="Image URL or upload..." style="flex: 1;" />
          <input type="file" class="extra-media-file-input" accept="image/*" style="display: none;" />
          <button type="button" class="btn-secondary btn-upload-extra-file" style="padding: 6px 12px; font-size: 0.8rem;" title="Upload file">
            <i class="fas fa-upload"></i>
          </button>
        </div>
        <button type="button" class="btn-icon-danger btn-remove-extra-media" data-index="${idx}" title="Remove view">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `).join('');

    // Attach row events
    extraMediaContainer.querySelectorAll('.media-repeater-item').forEach(row => {
      const idx = parseInt(row.dataset.index, 10);
      const labelInput = row.querySelector('.extra-media-label');
      const urlInput = row.querySelector('.extra-media-url');
      const fileInputRow = row.querySelector('.extra-media-file-input');
      const uploadBtn = row.querySelector('.btn-upload-extra-file');
      const removeBtn = row.querySelector('.btn-remove-extra-media');

      labelInput.addEventListener('input', () => {
        newProjectExtraMedia[idx].label = labelInput.value;
      });

      urlInput.addEventListener('input', () => {
        newProjectExtraMedia[idx].image = urlInput.value;
      });

      uploadBtn.addEventListener('click', () => fileInputRow.click());

      fileInputRow.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (loadEvent) => {
            const dataUrl = loadEvent.target.result;
            urlInput.value = dataUrl;
            newProjectExtraMedia[idx].image = dataUrl;
          };
          reader.readAsDataURL(file);
        }
      });

      removeBtn.addEventListener('click', () => {
        newProjectExtraMedia.splice(idx, 1);
        renderExtraMediaRows();
      });
    });
  }

  btnAddExtraMedia?.addEventListener('click', () => {
    newProjectExtraMedia.push({
      label: newProjectExtraMedia.length === 0 ? 'Back Cover (Verso)' : `Additional View #${newProjectExtraMedia.length + 1}`,
      image: '',
      desc: 'Secondary artwork view / verso detail.'
    });
    renderExtraMediaRows();
  });

  // Video File upload helper
  const btnUploadVideo = document.getElementById('btnUploadVideoFile');
  const videoFileInput = document.getElementById('newProjVideoFile');
  const videoUrlInput = document.getElementById('newProjVideoUrl');

  btnUploadVideo?.addEventListener('click', () => videoFileInput?.click());
  videoFileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        videoUrlInput.value = loadEvent.target.result;
        showAdminToast("Video asset ready for this project.");
      };
      reader.readAsDataURL(file);
    }
  });

  // Form: Add New Project submission
  const addProjectForm = document.getElementById('adminAddProjectForm');
  addProjectForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('newProjTitle')?.value.trim();
    const category = document.getElementById('newProjCategory')?.value;
    const discipline = document.getElementById('newProjDiscipline')?.value.trim();
    const year = document.getElementById('newProjYear')?.value.trim();
    const imageUrl = imageUrlInput?.value.trim();
    const videoUrl = videoUrlInput?.value.trim() || '';
    const bentoSpan = document.getElementById('newProjSpan')?.value || 'span-6';
    const tagsRaw = document.getElementById('newProjTags')?.value.trim();
    const summary = document.getElementById('newProjSummary')?.value.trim();
    const context = document.getElementById('newProjContext')?.value.trim();
    const featuredOnHome = document.getElementById('newProjFeaturedOnHome')?.checked;

    if (!title || !imageUrl || !summary || !context) {
      alert("Please provide at least Title, Main Artwork, Short Summary, and Storytelling Brief.");
      return;
    }

    const categorySlug = category === 'Music Cover' 
      ? 'music-cover' 
      : category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [discipline];

    // Build gallery from main image + extra media
    const gallery = [
      {
        label: 'Front Cover (Recto)',
        image: imageUrl,
        desc: summary
      }
    ];

    newProjectExtraMedia.forEach(extra => {
      if (extra.image.trim()) {
        gallery.push({
          label: extra.label.trim() || 'Additional View',
          image: extra.image.trim(),
          desc: extra.desc || 'Secondary perspective / detail.'
        });
      }
    });

    const newProject = {
      id: 'proj-' + Date.now(),
      title,
      category,
      categorySlug,
      coverImage: imageUrl,
      bentoSpan,
      year: year || `${new Date().getFullYear()}`,
      discipline,
      tags,
      summary,
      context,
      videoUrl,
      specs: {
        type: category,
        discipline,
        format: 'Master Print HD 300 DPI + Multi-Format Digital',
        tools: 'Adobe Photoshop, Creative Direction, Custom Typography'
      },
      featuredOnHome: !!featuredOnHome,
      gallery
    };

    // ALWAYS PREPEND TO TOP OF ARRAY AS THE NEWEST / MOST RECENT PROJECT
    projectsData.unshift(newProject);
    saveProjects(projectsData);

    // Reset Form
    addProjectForm.reset();
    newProjectExtraMedia = [];
    renderExtraMediaRows();
    previewBox.style.display = 'none';

    document.getElementById('adminProjectsList').innerHTML = renderAdminProjectsList(projectsData);
    setupDragAndDropReorder();
    showAdminToast(`Project "${title}" published at the top of the catalog!`);
    refreshViews();

    // Switch back to projects list tab
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === 'tab-projects'));
    tabPanes.forEach(p => p.classList.toggle('active', p.id === 'tab-projects'));
  });

  // Form: Settings (WhatsApp, Email, Socials)
  const settingsForm = document.getElementById('adminSettingsForm');
  settingsForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    settingsData = {
      ...settingsData,
      whatsappUrl: document.getElementById('settingWhatsAppUrl')?.value.trim() || DEFAULT_SETTINGS.whatsappUrl,
      whatsappNumber: document.getElementById('settingWhatsAppNumber')?.value.trim() || DEFAULT_SETTINGS.whatsappNumber,
      email: document.getElementById('settingEmail')?.value.trim() || DEFAULT_SETTINGS.email,
      instagramUrl: document.getElementById('settingInstagram')?.value.trim() || DEFAULT_SETTINGS.instagramUrl,
      xUrl: document.getElementById('settingX')?.value.trim() || DEFAULT_SETTINGS.xUrl,
      tiktokUrl: document.getElementById('settingTikTok')?.value.trim() || DEFAULT_SETTINGS.tiktokUrl,
      linkedinUrl: document.getElementById('settingLinkedIn')?.value.trim() || DEFAULT_SETTINGS.linkedinUrl,
    };

    saveSettings(settingsData);
    updateSiteSettingsUI();
    showAdminToast("Studio contact settings updated successfully.");
  });
}

function updateSiteSettingsUI() {
  const contactPriorityWA = document.getElementById('contactPriorityWhatsApp');
  if (contactPriorityWA) {
    contactPriorityWA.href = settingsData.whatsappUrl;
  }

  const contactEmailLink = document.getElementById('contactStudioEmailLink');
  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${settingsData.email}`;
    contactEmailLink.textContent = settingsData.email;
  }

  const contactInstaLink = document.getElementById('contactStudioInstaLink');
  if (contactInstaLink) {
    contactInstaLink.href = settingsData.instagramUrl;
  }

  const contactInstaBtn = document.getElementById('contactStudioInstaBtn');
  if (contactInstaBtn) {
    contactInstaBtn.href = settingsData.instagramUrl;
  }

  const footerSocials = document.getElementById('footerSocialsContainer');
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${settingsData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${settingsData.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="${settingsData.xUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="X"><i class="fab fa-x-twitter"></i></a>
      <a href="${settingsData.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="TikTok"><i class="fab fa-tiktok"></i></a>
      <a href="${settingsData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    `;
  }
}

function refreshViews() {
  const homeDisplayProjects = projectsData.filter(p => p.featuredOnHome);
  const displayed = homeDisplayProjects.length > 0 ? homeDisplayProjects : projectsData.slice(0, 6);

  const homeGrid = document.getElementById('homeBentoGrid');
  if (homeGrid) {
    homeGrid.className = `bento-grid layout-${settingsData.homeLayoutMode || 'bento-asym-signature'}`;
    homeGrid.innerHTML = renderHomeCards(displayed);
  }

  const navAllLink = document.getElementById('navAllProjectsLink');
  if (navAllLink) navAllLink.textContent = 'All Projects';

  const heroBtn = document.getElementById('heroOpenAllProjectsBtn');
  if (heroBtn) {
    heroBtn.innerHTML = `<span>View Complete Archive</span> <i class="fas fa-th-large"></i>`;
  }

  filterArchiveProjects('all', document.getElementById('archiveSearchInput')?.value || '');
}

// ==========================================================================
// EXISTING INTERACTIONS (HEADER, MODAL, CONCIERGE, CONTACT)
// ==========================================================================
function setupHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function setupNavigation() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const header = document.querySelector('.header');
  const mainNav = document.getElementById('mainNav');

  function closeMobileNav() {
    if (header?.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
      document.body.classList.remove('nav-lock-scroll');
      toggle?.setAttribute('aria-expanded', 'false');
      if (toggle) toggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }

  if (toggle && header) {
    toggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      document.body.classList.toggle('nav-lock-scroll', isOpen);
    });
  }

  // Close when tapping outside header/nav on mobile
  document.addEventListener('click', (e) => {
    if (header?.classList.contains('nav-open') && !header.contains(e.target)) {
      closeMobileNav();
    }
  });

  document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      closeMobileNav();

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        if (targetId && targetId !== 'home') {
          e.preventDefault();
          if (currentView === 'archive') {
            switchView('home', targetId);
          } else {
            scrollToSectionWithLuxurySpotlight(targetId);
          }
        }
      }
    });
  });
}

function setupProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = modal?.querySelector('.modal-close-btn');
  const mediaArea = document.getElementById('modalMediaDisplayArea');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalYear = document.getElementById('modalYear');
  const modalNarrative = document.getElementById('modalNarrative');
  const specDiscipline = document.getElementById('specDiscipline');
  const specFormat = document.getElementById('specFormat');
  const specType = document.getElementById('specType');
  const specTools = document.getElementById('specTools');
  const gallerySwitcher = document.getElementById('modalGallerySwitcher');
  const orderSimilarBtn = document.getElementById('modalOrderSimilarBtn');

  let activeProject = null;

  function showImage(src, alt) {
    if (!mediaArea) return;
    mediaArea.innerHTML = `<img class="modal-preview-img" src="${encodeURI(src)}" alt="${alt || ''}" />`;
  }

  function showVideo(videoSrc) {
    if (!mediaArea) return;
    if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be') || videoSrc.includes('vimeo.com')) {
      mediaArea.innerHTML = `<div class="modal-video-container"><iframe src="${videoSrc}" allowfullscreen></iframe></div>`;
    } else {
      mediaArea.innerHTML = `<div class="modal-video-container"><video src="${encodeURI(videoSrc)}" controls autoplay playsinline></video></div>`;
    }
  }

  function openProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    activeProject = project;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalYear.textContent = project.year;
    modalNarrative.textContent = project.context;

    specDiscipline.textContent = project.discipline;
    specFormat.textContent = project.specs.format;
    specType.textContent = project.specs.type;
    specTools.textContent = project.specs.tools;

    showImage(project.coverImage, project.title);

    // Build views list: gallery items + optional video
    const allViews = [];
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((g) => allViews.push({ type: 'image', label: g.label, src: g.image }));
    } else {
      allViews.push({ type: 'image', label: 'Front Cover', src: project.coverImage });
    }

    if (project.videoUrl) {
      allViews.push({ type: 'video', label: 'Teaser Video', src: project.videoUrl });
    }

    if (allViews.length > 1) {
      gallerySwitcher.style.display = 'flex';
      gallerySwitcher.innerHTML = allViews.map((item, idx) => `
        <button class="view-switch-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          ${item.type === 'video' ? '<i class="fas fa-play" style="font-size: 0.7rem; margin-right: 4px;"></i>' : ''}${item.label}
        </button>
      `).join('');

      gallerySwitcher.querySelectorAll('.view-switch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          gallerySwitcher.querySelectorAll('.view-switch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const index = parseInt(btn.dataset.index, 10);
          const view = allViews[index];
          if (view.type === 'video') {
            showVideo(view.src);
          } else {
            showImage(view.src, view.label);
          }
        });
      });
    } else {
      gallerySwitcher.style.display = 'none';
      gallerySwitcher.innerHTML = '';
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (mediaArea) mediaArea.innerHTML = ''; // stops any playing video
    document.body.style.overflow = '';
  }

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.bento-card, .archive-square-card');
    if (card && card.dataset.id) {
      openProject(card.dataset.id);
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  orderSimilarBtn?.addEventListener('click', () => {
    closeModal();
    if (currentView === 'archive') switchView('home');

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      if (activeProject) {
        const targetValue = activeProject.category === 'Music Cover' 
          ? "Album or Single Cover" 
          : "Sports & Matchday Poster";

        const matchingCard = document.querySelector(`#projectTypeGrid .composer-option-card[data-value="${targetValue}"]`);
        if (matchingCard) {
          document.querySelectorAll('#projectTypeGrid .composer-option-card').forEach(c => c.classList.remove('active'));
          matchingCard.classList.add('active');
          const hiddenType = document.getElementById('hiddenProjectType');
          if (hiddenType) hiddenType.value = targetValue;
        }
        
        const messageField = document.getElementById('message');
        if (messageField) {
          messageField.value = `Hello, I would like to commission a project inspired by "${activeProject.title}".\n\nProject details: `;
          messageField.focus();
        }
      }
    }, 150);
  });
}

function setupContactBriefForm() {
  const form = document.getElementById('briefForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const btnDispatchWA = document.getElementById('btnDispatchWhatsApp');
  const btnCopyEmail = document.getElementById('btnCopyEmail');

  // Copy Email button with tactile feedback
  btnCopyEmail?.addEventListener('click', async () => {
    const emailToCopy = settingsData.email;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const temp = document.createElement('textarea');
        temp.value = emailToCopy;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      btnCopyEmail.classList.add('copied');
      btnCopyEmail.innerHTML = '<i class="fas fa-check"></i> <span>Copied ✓</span>';
      setTimeout(() => {
        btnCopyEmail.classList.remove('copied');
        btnCopyEmail.innerHTML = '<i class="fas fa-copy"></i> <span>Copy</span>';
      }, 2500);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  });

  // Quick 1-Click WhatsApp Topic Launchers
  document.querySelectorAll('.quick-topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.waTopic || 'Creative Project';
      const waBase = settingsData.whatsappUrl;
      const msg = `Hi Mohamed, I would like to discuss a new "${topic}" project with Medar Studio.`;
      const delimiter = waBase.includes('?') ? '&' : '?';
      window.open(`${waBase}${delimiter}text=${encodeURIComponent(msg)}`, '_blank');
    });
  });

  // Project Focus selector (Tactile cards)
  const projectTypeCards = document.querySelectorAll('#projectTypeGrid .composer-option-card');
  const hiddenTypeInput = document.getElementById('hiddenProjectType');
  projectTypeCards.forEach(card => {
    card.addEventListener('click', () => {
      projectTypeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      if (hiddenTypeInput) hiddenTypeInput.value = card.dataset.value;
    });
  });

  // Deliverable format selector
  const formatBtns = document.querySelectorAll('#deliverableFormatRow .composer-chip-btn');
  const hiddenFormatInput = document.getElementById('hiddenDeliverableFormat');
  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (hiddenFormatInput) hiddenFormatInput.value = btn.dataset.value;
    });
  });

  // Turnaround selector
  const timelineBtns = document.querySelectorAll('#turnaroundRow .composer-chip-btn');
  const hiddenTimelineInput = document.getElementById('hiddenTurnaroundTimeline');
  timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (hiddenTimelineInput) hiddenTimelineInput.value = btn.dataset.value;
    });
  });

  // Dispatch via WhatsApp Engine
  btnDispatchWA?.addEventListener('click', () => {
    const nameVal = document.getElementById('name')?.value.trim();
    const emailVal = document.getElementById('email')?.value.trim();
    const phoneVal = document.getElementById('phone')?.value.trim();
    const messageVal = document.getElementById('message')?.value.trim();
    const projectType = hiddenTypeInput?.value || 'Sports & Matchday Poster';
    const deliverable = hiddenFormatInput?.value || 'Complete Suite (Print + Digital)';
    const timeline = hiddenTimelineInput?.value || 'Standard (1 to 2 Weeks)';

    if (!nameVal || !messageVal) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please provide your Name and a brief Project Vision before sending via WhatsApp.';
      }
      if (!nameVal) document.getElementById('name')?.focus();
      else document.getElementById('message')?.focus();
      return;
    }

    const lines = [
      `*MEDAR STUDIO — CREATIVE BRIEF*`,
      `• *Focus:* ${projectType}`,
      `• *Deliverable:* ${deliverable}`,
      `• *Timeline:* ${timeline}`,
      `• *Client / Artist:* ${nameVal}`,
      `• *Email:* ${emailVal || 'Shared on chat'}`,
      `• *Phone:* ${phoneVal || 'WhatsApp Channel'}`,
      ``,
      `*Project Vision & Notes:*`,
      messageVal
    ];

    const waBase = settingsData.whatsappUrl;
    const delimiter = waBase.includes('?') ? '&' : '?';
    const waUrl = `${waBase}${delimiter}text=${encodeURIComponent(lines.join('\n'))}`;

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.textContent = 'Opening WhatsApp with your pre-configured brief. Send the message to connect directly with Mohamed Amine Amarir!';
    }
    window.open(waUrl, '_blank');
  });

  // Standard Form Submission via Formspree
  if (!form || !feedback || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please fill out all required fields (Name, Email, Project Vision).';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Submitting brief...</span> <i class="fas fa-spinner fa-spin"></i>';

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you! Your creative brief has been officially submitted to Medar Studio. Mohamed Amine Amarir will review it and reply within 2 to 4 hours.';
        form.reset();
        // Reset selectors to defaults
        if (hiddenTypeInput) hiddenTypeInput.value = 'Sports & Matchday Poster';
        if (hiddenFormatInput) hiddenFormatInput.value = 'Complete Suite (Print + Digital)';
        if (hiddenTimelineInput) hiddenTimelineInput.value = 'Standard (1 to 2 Weeks)';
        projectTypeCards.forEach((c, idx) => c.classList.toggle('active', idx === 0));
        formatBtns.forEach((b, idx) => b.classList.toggle('active', idx === 2));
        timelineBtns.forEach((b, idx) => b.classList.toggle('active', idx === 1));
      } else {
        throw new Error('Submission error');
      }
    } catch (err) {
      feedback.className = 'form-feedback error';
      feedback.textContent = `An error occurred during submission. You can also send your brief directly via WhatsApp or email us at ${settingsData.email}.`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Submit Official Studio Brief</span>';
    }
  });
}

function setupStudioConcierge() {
  const widget = document.getElementById('aiChatWidget');
  const fab = document.getElementById('chatFab');
  const closeBtn = document.getElementById('chatCloseBtn');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');

  if (!widget || !fab || !chatMessages || !chatForm || !chatInput) return;

  fab.addEventListener('click', () => {
    widget.classList.toggle('chat-open');
    if (widget.classList.contains('chat-open')) {
      chatInput.focus();
    }
  });

  closeBtn?.addEventListener('click', () => {
    widget.classList.remove('chat-open');
  });

  async function handleUserMessage(msgText) {
    if (!msgText.trim()) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message user';
    userDiv.textContent = msgText;
    chatMessages.appendChild(userDiv);
    chatInput.value = '';

    const botDiv = document.createElement('div');
    botDiv.className = 'chat-message bot thinking';
    botDiv.textContent = 'Thinking...';
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msgText })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server error');
      }

      const data = await response.json();
      botDiv.classList.remove('thinking');
      botDiv.textContent = data.text || "I am at your service to discuss your poster, artwork, or creative direction project.";
    } catch (err) {
      botDiv.classList.remove('thinking');
      const matched = conciergeQuickPrompts.find(p => 
        msgText.toLowerCase().includes(p.q.toLowerCase().substring(0, 15)) ||
        p.q.toLowerCase().includes(msgText.toLowerCase().substring(0, 15))
      );

      if (matched) {
        botDiv.textContent = matched.a;
      } else {
        botDiv.textContent = "For any bespoke inquiry about an upcoming visual or release, you can connect directly with Mohamed Amine Amarir on WhatsApp or email us at " + settingsData.email + ".";
      }
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (query) handleUserMessage(query);
  });

  widget.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query;
      if (query) handleUserMessage(query);
    });
  });
}

// ==========================================================================
// LUXURY CLICK & INTERACTION FEEDBACK
// ==========================================================================
function setupLuxuryClickFeedback() {
  const selectors = '.btn-primary, .btn-secondary, .social-icon-btn, .filter-btn, .bento-card, .archive-square-card, .btn-dispatch-wa, .btn-dispatch-submit, .btn-whatsapp-priority, .quick-topic-btn, .channel-copy-btn, .composer-option-card, .composer-chip-btn';
  document.querySelectorAll(selectors).forEach(el => {
    el.classList.add('luxury-click-feedback');
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', renderApp);

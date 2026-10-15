const appScript = document.querySelector('script[src$="app.js"]');
const siteRootUrl = new URL('.', appScript.src);

function assetUrl(path) {
  return new URL(`assets/${path.replace(/^assets\//, '')}`, siteRootUrl).href;
}

function cleanRouteUrl(hashRoute) {
  const route = hashRoute.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '');
  return new URL(route ? `${route}/` : './', siteRootUrl).pathname;
}

function applyCleanRoutes(scope = document) {
  scope.querySelectorAll('a[href^="#/"]').forEach(link => {
    link.setAttribute('href', cleanRouteUrl(link.getAttribute('href')));
  });
}

function currentRouteParts() {
  const rootPath = decodeURIComponent(siteRootUrl.pathname);
  let path = decodeURIComponent(window.location.pathname);
  if (path.startsWith(rootPath)) path = path.slice(rootPath.length);
  return path.replace(/index\.html$/i, '').split('/').filter(Boolean);
}

const products = [
  {
    slug: 'motor-control-center',
    name: 'Motor Control Center',
    short: 'Centralized control and protection for multiple motors.',
    intro: 'Engineered to control and protect multiple motors from a centralized panel for dependable plant operation.',
    bullets: ['Includes MCCBs/MCBs, contactors, overload relays, starters and VFDs', 'Suitable for pumps, fans, compressors, conveyors and industrial machinery', 'Organized for safe access, clear identification and maintainability'],
    applications: ['Pumps & fans', 'Compressors', 'Conveyors', 'Industrial machinery']
  },
  {
    slug: 'power-control-center',
    name: 'Power Control Center',
    short: 'Main power distribution for demanding industrial loads.',
    intro: 'A high-current power distribution panel designed to receive, protect and distribute electrical power across a facility.',
    bullets: ['Houses ACBs, MCCBs, busbars, metering and protection devices', 'Built for high-current industrial power distribution', 'Designed around project load, protection and operational requirements'],
    applications: ['Main LT distribution', 'Industrial utilities', 'Plant infrastructure', 'Commercial facilities']
  },
  {
    slug: 'programmable-logic-control',
    name: 'Programmable Logic Control',
    short: 'Automated sequencing, monitoring and process control.',
    intro: 'PLC panels bring automatic control and sequencing to industrial processes while keeping monitoring and interlocking clear.',
    bullets: ['Integrates PLC, HMI, I/O modules, relays and control components', 'Enables process monitoring, interlocking and automation', 'Configured around the required machine or process sequence'],
    applications: ['Machine automation', 'Process control', 'Material handling', 'Utility systems']
  },
  {
    slug: 'automatic-power-factor-correction',
    name: 'Automatic Power Factor Correction',
    short: 'Automatic power-factor management for electrical systems.',
    intro: 'APFC panels automatically maintain the required power factor and help manage reactive power demand.',
    bullets: ['Uses capacitor banks, contactors or thyristor switching and APFC relays', 'Supports automatic correction as electrical demand changes', 'Helps reduce reactive power demand and avoid power-factor penalties'],
    applications: ['Factories', 'Commercial buildings', 'Utilities', 'Process plants']
  },
  {
    slug: 'automation-panels',
    name: 'Automation Panels',
    short: 'Integrated control for machines, processes and systems.',
    intro: 'Automation panels are designed for machine control, process automation and coordinated system integration.',
    bullets: ['Can include PLC, HMI, VFD, soft starters, relays and control systems', 'Supports automated operation, monitoring and protection', 'Layouts are engineered for the specific sequence and field interface'],
    applications: ['OEM machinery', 'Process skids', 'Production lines', 'Remote monitoring']
  },
  {
    slug: 'draw-out-panels',
    name: 'Draw-Out Panels',
    short: 'Withdrawable modules for faster, safer maintenance.',
    intro: 'Panels with withdrawable breaker or feeder modules make maintenance and isolation more straightforward.',
    bullets: ['Equipment can be isolated and withdrawn without dismantling the complete panel', 'Reduces maintenance time and operational downtime', 'Clear feeder separation supports serviceability'],
    applications: ['Critical plants', 'High-availability facilities', 'Large utilities', 'Process industries']
  },
  {
    slug: 'breaker-panels',
    name: 'Breaker Panels',
    short: 'Switching, isolation and protection for electrical circuits.',
    intro: 'Breaker panels combine switching, isolation and protection in a coordinated enclosure for distribution circuits.',
    bullets: ['Designed around ACB, MCCB and other circuit protection devices', 'Can include protection relays, metering, busbars and control accessories', 'Configured for the required incomer and outgoing feeder scheme'],
    applications: ['Power distribution', 'Feeder protection', 'Building services', 'Plant expansion']
  },
  {
    slug: 'specialised-panels',
    name: 'Specialised Panels',
    short: 'Application-specific panels built around your requirement.',
    intro: 'Custom-engineered panel solutions developed to meet specific client, application and site requirements.',
    bullets: ['Customized layouts, components and control systems', 'Engineered for application-specific performance and reliability', 'Built through a documented design, assembly and testing process'],
    applications: ['Custom machinery', 'Retrofit projects', 'Unique control systems', 'Integrated packages']
  }
].map((product, index) => ({ ...product, image: assetUrl(`${product.slug}.webp`), number: String(index + 1).padStart(2, '0') }));

const industries = [
  { slug: 'manufacturing', name: 'Manufacturing & Process Industries', copy: 'Coordinated distribution, motor control and automation for production environments.', solutions: ['MCC and PCC systems', 'Machine and line automation', 'Energy monitoring', 'Custom electrical integration'] },
  { slug: 'solar-renewable', name: 'Solar & Renewable Energy', copy: 'Panel solutions that support renewable-energy balance-of-plant and utility interfaces.', solutions: ['Power distribution', 'Protection coordination', 'Control and monitoring', 'Application-specific enclosures'] },
  { slug: 'pharma-chemical-food', name: 'Pharmaceutical, Chemical & F&B', copy: 'Process-focused power and controls for regulated and continuous production facilities.', solutions: ['Process automation', 'PLC and HMI systems', 'Motor and drive control', 'Utility panels'] },
  { slug: 'water-wastewater', name: 'Water & Wastewater Treatment', copy: 'Reliable control for pumps, treatment processes and distributed utility loads.', solutions: ['Pump control centers', 'Level and process automation', 'APFC systems', 'Remote-ready control panels'] },
  { slug: 'material-handling', name: 'Pumps, Motors & Material Handling', copy: 'Motor-centric control and protection for movement, conveying and rotating equipment.', solutions: ['MCCs and starters', 'VFD integration', 'Conveyor control', 'Protection and interlocking'] },
  { slug: 'utilities-energy', name: 'Utilities & Energy Management', copy: 'Structured power distribution and monitoring for critical plant infrastructure.', solutions: ['PCC and breaker panels', 'APFC systems', 'Metering and protection', 'Modular power systems'] }
].map((industry, index) => ({ ...industry, number: String(index + 1).padStart(2, '0') }));

const clients = [
  ['BHEL', 1], ['Airports Authority of India', 2], ['Reserve Bank of India', 3], ['SAIL', 4], ['MEIL', 5], ['Jaypee Group', 6], ['UltraTech Cement', 7], ['Metrochem', 8], ['Honour', 9], ["Dr. Reddy's", 10], ['MSN Laboratories', 11], ['Tirumala Tirupati Devasthanams', 12], ['HITEX', 13], ['Lotus', 14], ['Puzzolana', 15]
].map(([name, image]) => ({ name, image: assetUrl(`clients/client-${String(image).padStart(2, '0')}.webp`) }));

// Demonstration locations. Replace these entries with client-approved project data.
const sampleProjects = [
  { city: 'Hyderabad', country: 'India', coordinates: [17.3850, 78.4867], solution: 'Automation & control panels', industry: 'Pharmaceutical', region: 'india' },
  { city: 'Dewas', country: 'India', coordinates: [22.9676, 76.0534], solution: 'MCC & PCC systems', industry: 'Manufacturing', region: 'india' },
  { city: 'Pune', country: 'India', coordinates: [18.5204, 73.8567], solution: 'Power distribution panels', industry: 'Automotive', region: 'india' },
  { city: 'Mumbai', country: 'India', coordinates: [19.0760, 72.8777], solution: 'Breaker panels', industry: 'Infrastructure', region: 'india' },
  { city: 'Chennai', country: 'India', coordinates: [13.0827, 80.2707], solution: 'PLC & automation panels', industry: 'Process industry', region: 'india' },
  { city: 'Ahmedabad', country: 'India', coordinates: [23.0225, 72.5714], solution: 'APFC panels', industry: 'Utilities', region: 'india' },
  { city: 'New Delhi', country: 'India', coordinates: [28.6139, 77.2090], solution: 'Specialised panels', industry: 'Commercial', region: 'india' },
  { city: 'Dubai', country: 'United Arab Emirates', coordinates: [25.2048, 55.2708], solution: 'Power control systems', industry: 'Infrastructure', region: 'international' },
  { city: 'Doha', country: 'Qatar', coordinates: [25.2854, 51.5310], solution: 'Motor control systems', industry: 'Utilities', region: 'international' },
  { city: 'Nairobi', country: 'Kenya', coordinates: [-1.2921, 36.8219], solution: 'Water-system controls', industry: 'Water treatment', region: 'international' },
  { city: 'Rotterdam', country: 'Netherlands', coordinates: [51.9244, 4.4777], solution: 'Automation panels', industry: 'Material handling', region: 'international' }
];

const aboutLinks = [
  ['Company', '#/about'], ['Engineering & Manufacturing', '#/about/process'], ['Quality & Certifications', '#/about/quality']
];

const productLinks = [['All products', '#/products'], ...products.map(p => [p.name, `#/products/${p.slug}`])];
const industryLinks = [['All industries', '#/industries'], ...industries.map(i => [i.name, `#/industries/${i.slug}`])];

const icon = (value) => `<span aria-hidden="true">${value}</span>`;
const pageHero = (eyebrow, title, copy, parent = '') => `
  <section class="page-hero">
    <div class="shell">
      <div class="breadcrumb"><a href="#/">Home</a>${parent ? `<span>/</span><span>${parent}</span>` : ''}</div>
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title}</h1>
      <p>${copy}</p>
    </div>
  </section>`;

const productCard = (product) => `
  <a class="product-card" href="#/products/${product.slug}">
    <span class="number">${product.number}</span>
    <div class="product-image"><img src="${product.image}" alt="${product.name} manufactured by IEC" loading="lazy" width="900" height="680"></div>
    <div><h3>${product.name}</h3><p>${product.short}</p><span class="text-link">Explore product <span>↗</span></span></div>
  </a>`;

function homePage() {
  return `
    <section class="hero">
      <div class="hero-media"><img src="${assetUrl('hero-engineering.webp')}" alt="Industrial electrical panels and electrical engineer" width="1600" height="668"></div>
      <div class="hero-content">
        <span class="eyebrow">Engineered in Hyderabad. Built for industry.</span>
        <h1>Powering industry with <span>precision.</span></h1>
        <p class="hero-copy">IEC designs and manufactures dependable MCC, PCC, PLC, automation and custom electrical panels—built around the way your operation needs to perform.</p>
        <div class="button-row">
          <a class="button button-primary" href="#/products">Explore our products <span>↗</span></a>
          <a class="button button-secondary" href="#/contact">Discuss a requirement</a>
        </div>
        <div class="hero-proof">
          <div class="proof-item"><strong>15+</strong><span>Years of engineering experience</span></div>
          <div class="proof-item"><strong>8</strong><span>Core panel product families</span></div>
          <div class="proof-item"><strong>01</strong><span>Integrated team from design to dispatch</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell intro-grid">
        <div class="intro-copy">
          <span class="eyebrow">Industrial Electricals & Controls</span>
          <h2>Where engineering meets dependable performance.</h2>
          <p>Since 2010, IEC has delivered electrical and automation solutions for industrial, commercial and infrastructure projects across India and international markets.</p>
          <div class="feature-list">
            <div class="feature"><div class="feature-icon">01</div><div><h3>Customized engineering</h3><p>Designed around project requirements, operating conditions and application goals.</p></div></div>
            <div class="feature"><div class="feature-icon">02</div><div><h3>Integrated capability</h3><p>Power distribution, motor control, automation and custom-engineered panels under one roof.</p></div></div>
            <div class="feature"><div class="feature-icon">03</div><div><h3>Reliable delivery</h3><p>Clear communication, documented quality and attention to timely completion.</p></div></div>
          </div>
          <a class="text-link" href="#/about">Discover the IEC story <span>↗</span></a>
        </div>
        <div class="intro-visual">
          <img src="${assetUrl('panel-room.webp')}" alt="IEC industrial electrical panel lineup" loading="lazy" width="1000" height="1416">
          <div class="stat-card"><strong>2010</strong><span>The year IEC began delivering electrical and automation solutions.</span></div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="shell">
        <div class="section-head">
          <div><span class="eyebrow">Manufacturing range</span><h2>Built for the work behind every switch.</h2></div>
          <div><p>From incoming power to final process control, explore eight core panel systems engineered for safe, dependable operation.</p><p><a class="text-link" href="#/products">View complete product range <span>→</span></a></p></div>
        </div>
        <div class="product-rail">${products.map(productCard).join('')}</div>
      </div>
    </section>

    <section class="section section-navy">
      <div class="shell">
        <div class="section-head">
          <div><span class="eyebrow">Industries & applications</span><h2>Engineered around real operating environments.</h2></div>
          <p>IEC applies power distribution, motor control, energy management and automation expertise across complex industrial applications.</p>
        </div>
        <div class="industry-grid">${industries.map(i => `<a class="industry-card" href="#/industries/${i.slug}"><span class="industry-no">${i.number}</span><h3>${i.name}</h3><p>${i.copy}</p></a>`).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="shell process-wrap">
        <div>
          <span class="eyebrow">One accountable process</span>
          <div class="section-head" style="display:block;margin:14px 0 18px"><h2>From requirement to dispatch.</h2></div>
          <div class="process-list">
            ${['Requirement & Design', 'Engineering & BOM', 'Sheet Metal Fabrication', 'Busbar Processing', 'Assembly & Wiring', 'Testing & Inspection', 'Quality Assurance', 'Packing & Dispatch'].map((step, index) => `<div class="process-step"><strong>${String(index + 1).padStart(2, '0')}</strong><div><h3>${step}</h3><p>${index < 2 ? 'Translate the application into a clear, buildable engineering plan.' : index < 6 ? 'Execute the panel build with disciplined production control.' : 'Verify, document and prepare the system for dependable delivery.'}</p></div></div>`).join('')}
          </div>
        </div>
        <div class="process-visual"><img src="${assetUrl('power-grid.webp')}" alt="Power transmission infrastructure" loading="lazy"></div>
      </div>
    </section>

    <section class="logo-strip" aria-label="Selected IEC clients">
      <div class="logo-track">${[...clients.slice(0, 10), ...clients.slice(0, 10)].map(c => `<a class="logo-chip" href="#/clients" aria-label="${c.name}"><img src="${c.image}" alt="${c.name} logo" loading="lazy"></a>`).join('')}</div>
    </section>

    ${ctaBand('Have a panel requirement?', 'Bring us the load list, control philosophy or simply the problem. IEC will help shape the right electrical solution.', 'Start a conversation')}
  `;
}

function ctaBand(title, copy, label = 'Contact IEC') {
  return `<section class="cta-band"><div class="shell"><div class="cta-panel"><h2>${title}</h2><p>${copy}</p><div class="button-row"><a class="button button-light" href="#/contact">${label} <span>↗</span></a><a class="button button-secondary" href="tel:+919440083166">Call +91 94400 83166</a></div></div></div></section>`;
}

function projectFootprintSection() {
  return `<section class="section footprint-section" aria-labelledby="footprint-title">
    <div class="shell">
      <div class="footprint-heading">
        <div><span class="eyebrow">Project footprint</span><h2 id="footprint-title">Engineered here. Delivered across borders.</h2></div>
        <p>Explore demonstration locations showing how IEC project deliveries can be presented across India and international markets.</p>
      </div>
      <div class="footprint-panel">
        <div class="footprint-intro">
          <span class="demo-badge"><i aria-hidden="true"></i> Sample project data</span>
          <h3>One view of a growing delivery network.</h3>
          <p>Use the filters, select a marker for project details, or zoom and pan the map. These locations will be replaced with verified project information from IEC.</p>
          <div class="map-filters" aria-label="Filter project locations">
            <button type="button" class="map-filter active" data-map-filter="all" aria-pressed="true">All locations</button>
            <button type="button" class="map-filter" data-map-filter="india" aria-pressed="false">India</button>
            <button type="button" class="map-filter" data-map-filter="international" aria-pressed="false">International</button>
          </div>
          <div class="map-legend" aria-label="Map legend">
            <span><i class="legend-dot india" aria-hidden="true"></i> India sample</span>
            <span><i class="legend-dot international" aria-hidden="true"></i> International sample</span>
          </div>
        </div>
        <div class="project-map-wrap">
          <div id="project-map" class="project-map" role="region" aria-label="Interactive map of sample IEC project locations" tabindex="0">
            <div class="map-loading"><span aria-hidden="true"></span> Loading project map…</div>
          </div>
          <p class="map-instruction">Use <strong>+</strong>/<strong>−</strong>, scroll or a two-finger trackpad gesture while hovering the map. Pinch with two fingers on mobile.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function aboutPage(section = 'company') {
  const content = {
    company: {
      eyebrow: 'About IEC', title: 'Built on engineering clarity and dependable delivery.', copy: 'A Hyderabad-based electrical panel manufacturer serving industrial, commercial and infrastructure requirements since 2010.',
      body: `<section class="section"><div class="shell story-grid"><div class="story-copy"><span class="eyebrow">Our company</span><h2>Solutions designed around the job—not a standard template.</h2><p>Industrial Electricals & Controls combines engineering knowledge, manufacturing capability and practical industry experience to develop electrical and automation solutions that support efficient operations and long-term value.</p><p>Its expertise covers power distribution, motor control, automation and custom-engineered panels for projects in India and international markets.</p><a class="text-link" href="#/about/process">See how IEC builds <span>↗</span></a></div><div class="story-media"><img src="${assetUrl('panel-room.webp')}" alt="Industrial electrical panels" loading="lazy"></div></div></section>
        ${projectFootprintSection()}
        <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Why choose IEC</span><h2>Four principles behind every project.</h2></div><p>Practical capabilities distilled from the company brochure and manufacturing process.</p></div><div class="value-grid">${[['01','Customized solutions','Designed to meet specific project requirements.'],['02','Technical expertise','Experience across panel design, automation and electrical integration.'],['03','Clear communication','Smooth coordination through engineering, production and delivery.'],['04','Reliable delivery','Attention to quality, documentation and timely completion.']].map(v => `<div class="info-card"><b>${v[0]}</b><h3>${v[1]}</h3><p>${v[2]}</p></div>`).join('')}</div></div></section>`
    },
    process: {
      eyebrow: 'Engineering & manufacturing', title: 'One disciplined path from brief to build.', copy: 'IEC brings design, fabrication, assembly, testing and dispatch into a clear manufacturing workflow.',
      body: `<section class="section"><div class="shell"><div class="section-head"><div><span class="eyebrow">Manufacturing process</span><h2>Eight checkpoints. One accountable team.</h2></div><p>Each phase moves the panel closer to safe, documented and dependable service.</p></div><div class="cards-grid">${['Requirement & Design','Engineering & BOM','Sheet Metal Fabrication','Busbar Processing','Assembly & Wiring','Testing & Inspection','Quality Assurance','Packing & Dispatch'].map((step,index)=>`<div class="info-card"><b>${String(index+1).padStart(2,'0')}</b><h3>${step}</h3><p>${index<2?'Define the requirement and convert it into controlled engineering inputs.':index<6?'Build and verify each electrical and mechanical layer of the panel.':'Complete final controls, documentation and delivery preparation.'}</p></div>`).join('')}</div></div></section>`
    },
    quality: {
      eyebrow: 'Quality & certifications', title: 'Confidence is engineered into the process.', copy: 'Testing, inspection, quality assurance and documented project controls support IEC’s manufacturing approach.',
      body: `<section class="section"><div class="shell story-grid"><div class="story-copy"><span class="eyebrow">Documented credentials</span><h2>Quality that can be traced.</h2><p>IEC’s brochure presents MSME registration, a CPRI India test report and Government of India GST registration among its credentials.</p><p>The company also highlights an International Women’s Day 2019 manufacturing recognition associated with WE AIM, Škoda and ASSOCHAM.</p><p style="font-size:13px">Certification scope and current validity should be confirmed against the latest original documents for tender or compliance use.</p></div><div class="value-grid" style="grid-template-columns:1fr"><div class="info-card"><b>QA</b><h3>Quality assurance</h3><p>A defined checkpoint before packing and dispatch.</p></div><div class="info-card"><b>TI</b><h3>Testing & inspection</h3><p>Verification built into the manufacturing workflow.</p></div><div class="info-card"><b>DC</b><h3>Documentation control</h3><p>Clear project information to support delivery and long-term value.</p></div></div></div></section>`
    }
  }[section] || null;
  if (!content) return notFound();
  return pageHero(content.eyebrow, content.title, content.copy, 'About') + content.body + ctaBand('Let’s engineer the right panel for your project.', 'IEC supports requirements from initial concept through manufacturing and dispatch.', 'Discuss your project');
}

function productsPage(slug) {
  if (!slug) {
    return pageHero('Our products', 'Eight panel systems. One engineering partner.', 'Explore IEC’s manufacturing range for power distribution, motor control, automation, protection and custom industrial requirements.') + `
      <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Manufacturing range</span><h2>Find the right starting point.</h2></div><p>Every system can be configured around the project’s rating, protection philosophy, controls and site conditions.</p></div><div class="product-directory">${products.map(p => `<a class="directory-card" href="#/products/${p.slug}"><img src="${p.image}" alt="${p.name}" loading="lazy"><div><h3>${p.name}</h3><p>${p.short}</p><span class="text-link">View details <span>↗</span></span></div></a>`).join('')}</div></div></section>` + ctaBand('Not sure which panel architecture fits?', 'Share your single-line diagram, load list or control requirement and start with an engineering conversation.', 'Get product guidance');
  }
  const p = products.find(item => item.slug === slug);
  if (!p) return notFound();
  return pageHero('IEC product range', p.name, p.intro, 'Products') + `
    <section class="section"><div class="shell detail-grid"><div class="detail-media"><img src="${p.image}" alt="${p.name} manufactured by IEC"></div><div class="detail-copy"><span class="eyebrow">${p.number} / 08</span><h2>Designed for your electrical architecture.</h2><p>${p.short} IEC configures each panel around project-specific operating and protection requirements.</p><ul class="bullet-list">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul><div class="pills">${p.applications.map(a => `<span class="pill">${a}</span>`).join('')}</div><div class="button-row"><a class="button button-primary" href="#/contact">Request a discussion <span>↗</span></a><a class="button" href="#/products" style="border-color:var(--line)">All products</a></div></div></div></section>` + ctaBand(`Planning a ${p.name.toLowerCase()}?`, 'Talk to IEC about ratings, layout, component preferences and control requirements.', 'Send your requirement');
}

function industriesPage(slug) {
  if (!slug) {
    return pageHero('Industries', 'Electrical solutions shaped by the application.', 'IEC serves industrial, commercial and infrastructure projects with practical power, motor-control and automation expertise.') + `
      <section class="section section-navy"><div class="shell"><div class="section-head"><div><span class="eyebrow">Applications</span><h2>Explore by operating environment.</h2></div><p>Each industry page connects typical site needs to the relevant IEC solution families.</p></div><div class="industry-grid">${industries.map(i => `<a class="industry-card" href="#/industries/${i.slug}"><span class="industry-no">${i.number}</span><h3>${i.name}</h3><p>${i.copy}</p></a>`).join('')}</div></div></section>` + ctaBand('Your application may be unique. That’s the point.', 'IEC’s custom engineering process begins with how your plant actually works.', 'Discuss an application');
  }
  const i = industries.find(item => item.slug === slug);
  if (!i) return notFound();
  return pageHero('Industry application', i.name, i.copy, 'Industries') + `
    <section class="section"><div class="shell detail-grid"><div class="detail-copy"><span class="eyebrow">Application ${i.number}</span><h2>Connect power, control and performance.</h2><p>IEC combines the relevant distribution, motor-control, automation and custom-engineering capabilities around the site’s operating priorities.</p><ul class="bullet-list">${i.solutions.map(s => `<li>${s}</li>`).join('')}</ul><div class="button-row"><a class="button button-primary" href="#/contact">Discuss this application <span>↗</span></a><a class="button" href="#/industries" style="border-color:var(--line)">All industries</a></div></div><div class="process-visual" style="min-height:450px"><img src="${assetUrl('power-grid.webp')}" alt="Power infrastructure for ${i.name}"></div></div></section>
    <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Relevant capabilities</span><h2>Start with the system you need.</h2></div><p>IEC can coordinate multiple product families within one project.</p></div><div class="product-directory">${products.slice(0,4).map(p=>`<a class="directory-card" href="#/products/${p.slug}"><img src="${p.image}" alt="${p.name}" loading="lazy"><div><h3>${p.name}</h3><p>${p.short}</p><span class="text-link">Explore <span>↗</span></span></div></a>`).join('')}</div></div></section>` + ctaBand('Bring IEC into the project conversation.', 'Share the application, load and operating context to begin.', 'Contact IEC');
}

function clientsPage() {
  return pageHero('Our clients', 'Trusted across industry and infrastructure.', 'IEC’s brochure highlights relationships spanning manufacturing, pharmaceuticals, infrastructure, public-sector and engineering organizations.') + `
    <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Selected organizations</span><h2>A diverse client landscape.</h2></div><p>Logos shown here are reproduced from the company brochure. Their presence indicates a listed client relationship and does not imply endorsement.</p></div><div class="client-grid">${clients.map(c => `<div class="client-card"><img src="${c.image}" alt="${c.name} logo" loading="lazy"><span>${c.name}</span></div>`).join('')}</div></div></section>
    <section class="section"><div class="shell"><div class="testimonial-note"><div><span class="eyebrow">Client testimonials</span><h2>Approved project stories are being prepared.</h2><p>IEC can publish verified client quotes and project outcomes here once approval is received. No placeholder endorsements have been presented as real testimonials.</p></div><span class="pending-badge">Awaiting client approval</span></div></div></section>` + ctaBand('Join IEC’s growing client network.', 'Start with a clear requirement and a responsive engineering conversation.', 'Talk to IEC');
}

function contactPage() {
  return pageHero('Contact IEC', 'Let’s turn your requirement into a buildable solution.', 'Call, email, WhatsApp or send a project brief. IEC will help identify the right next engineering step.') + `
    <section class="section"><div class="shell contact-grid"><div><span class="eyebrow">Direct contact</span><div class="section-head" style="display:block;margin:14px 0 0"><h2>Speak with the team.</h2></div><p style="color:var(--muted)">For new projects, include available ratings, SLDs, load lists, control philosophy or site constraints.</p><div class="contact-list">
      <a class="contact-card" href="tel:+919440083166"><b>☎</b><div><small>Mobile</small><strong>+91 94400 83166</strong></div></a>
      <a class="contact-card" href="tel:+914023095559"><b>⌕</b><div><small>Landline</small><strong>040-23095559</strong></div></a>
      <a class="contact-card" href="mailto:iec.hyderabad@yahoo.com"><b>@</b><div><small>Email</small><strong>iec.hyderabad@yahoo.com</strong></div></a>
      <a class="contact-card" target="_blank" rel="noreferrer" href="https://wa.me/919440083166"><b>W</b><div><small>WhatsApp</small><strong>Start a conversation</strong></div></a>
      <div class="contact-card"><b>⌖</b><div><small>Works</small><strong>78/B/3, Phase VI, IDA, Jeedimetla, Hyderabad, Telangana 500055</strong></div></div>
    </div></div>
    <form class="contact-form" id="contact-form"><h2>Send a project brief</h2><p>This static form prepares an email in your default mail app.</p><div class="field-grid two"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization"></div></div><div class="field-grid two" style="margin-top:15px"><div class="field"><label for="email">Work email *</label><input id="email" type="email" name="email" required autocomplete="email"></div><div class="field"><label for="phone">Phone</label><input id="phone" type="tel" name="phone" autocomplete="tel"></div></div><div class="field" style="margin-top:15px"><label for="interest">Requirement</label><select id="interest" name="interest"><option>Electrical panel requirement</option>${products.map(p=>`<option>${p.name}</option>`).join('')}<option>Service / general enquiry</option></select></div><div class="field" style="margin-top:15px"><label for="message">Project details *</label><textarea id="message" name="message" required placeholder="Tell us about the application, ratings, quantity, location and timeline."></textarea></div><div class="button-row"><button class="button button-primary" type="submit">Prepare email <span>↗</span></button></div><p class="form-note">The message is addressed to iec.hyderabad@yahoo.com. No form data is stored on this website.</p></form></div></section>`;
}

function notFound() {
  return pageHero('404', 'This circuit doesn’t go anywhere.', 'The page you requested could not be found.') + `<section class="section"><div class="shell"><a class="button button-primary" href="#/">Return home</a></div></section>`;
}

function footer() {
  return `<div class="shell"><div class="footer-grid"><div class="footer-brand"><img src="${assetUrl('iec-logo.webp')}" alt="IEC"><p>Industrial Electricals & Controls designs and manufactures MCC, PCC, PLC, automation and custom-engineered electrical panels from Hyderabad, India.</p><a class="text-link" href="mailto:iec.hyderabad@yahoo.com">iec.hyderabad@yahoo.com <span>↗</span></a></div><div class="footer-nav"><div><h3>Explore</h3><a href="#/about">About IEC</a><a href="#/industries">Industries</a><a href="#/products">Products</a><a href="#/clients">Our clients</a></div><div><h3>Popular products</h3>${products.slice(0,5).map(p=>`<a href="#/products/${p.slug}">${p.name}</a>`).join('')}</div><div><h3>Contact</h3><a href="tel:+919440083166">+91 94400 83166</a><a href="tel:+914023095559">040-23095559</a><a href="https://wa.me/919440083166" target="_blank" rel="noreferrer">WhatsApp</a><a href="#/contact">Hyderabad works</a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Industrial Electricals & Controls.</span><span>Engineered for clarity, speed and every screen.</span></div></div>`;
}

function menuMarkup() {
  const group = (title, links) => `<details class="mobile-group"><summary>${title}</summary><div class="mobile-subnav">${links.map(l => `<a href="${l[1]}">${l[0]}</a>`).join('')}</div></details>`;
  return `<a href="#/">Home <span>↗</span></a>${group('About IEC', aboutLinks)}${group('Industries', industryLinks)}${group('Products', productLinks)}<a href="#/clients">Our Clients <span>↗</span></a><a href="#/contact">Contact Us <span>↗</span></a><div class="mobile-contact"><strong>Have a project requirement?</strong><p>Call IEC at +91 94400 83166 or start a WhatsApp conversation.</p><a class="button button-primary" href="https://wa.me/919440083166" target="_blank" rel="noreferrer">Open WhatsApp</a></div>`;
}

function megaMarkup(key) {
  const config = {
    about: ['About IEC', 'Get to know the company, manufacturing approach and quality credentials.', aboutLinks],
    industries: ['Industries', 'Explore electrical solutions shaped around specific operating environments.', industryLinks],
    products: ['Products', 'Browse eight core product families for power, control and automation.', productLinks]
  }[key];
  if (!config) return '';
  return `<div class="mega-inner"><div class="mega-intro"><span class="eyebrow">Explore</span><h2>${config[0]}</h2><p>${config[1]}</p></div><div class="mega-links">${config[2].map(l=>`<a class="mega-link" href="${l[1]}"><b>${l[0]}</b><span>↗</span></a>`).join('')}</div></div>`;
}

function render() {
  const path = currentRouteParts();
  let html;
  if (!path.length) html = homePage();
  else if (path[0] === 'about') html = aboutPage(path[1] || 'company');
  else if (path[0] === 'products') html = productsPage(path[1]);
  else if (path[0] === 'industries') html = industriesPage(path[1]);
  else if (path[0] === 'clients') html = clientsPage();
  else if (path[0] === 'contact') html = contactPage();
  else html = notFound();

  document.querySelector('#main-content').innerHTML = html;
  document.querySelector('#site-footer').innerHTML = footer();
  document.querySelector('#mobile-menu').innerHTML = menuMarkup();
  applyCleanRoutes();
  document.title = `${path.length ? document.querySelector('h1')?.textContent + ' | ' : ''}IEC`;
  bindPageEvents();
}

let leafletPromise;

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (leafletPromise) return leafletPromise;

  const stylesheetPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('#leaflet-styles');
    if (existing) {
      if (existing.sheet) resolve();
      else {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
      }
      return;
    }
    const stylesheet = document.createElement('link');
    stylesheet.id = 'leaflet-styles';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    stylesheet.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    stylesheet.crossOrigin = 'anonymous';
    stylesheet.addEventListener('load', resolve, { once: true });
    stylesheet.addEventListener('error', reject, { once: true });
    document.head.appendChild(stylesheet);
  });

  const scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('#leaflet-script');
    if (existing) {
      if (window.L) resolve();
      else {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
      }
      return;
    }
    const script = document.createElement('script');
    script.id = 'leaflet-script';
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = 'anonymous';
    script.addEventListener('load', resolve, { once: true });
    script.addEventListener('error', reject, { once: true });
    document.head.appendChild(script);
  });

  leafletPromise = Promise.all([stylesheetPromise, scriptPromise]).then(() => window.L);
  return leafletPromise;
}

async function initProjectMap() {
  const mapElement = document.querySelector('#project-map');
  if (!mapElement || mapElement.dataset.ready === 'true') return;
  mapElement.dataset.ready = 'true';

  try {
    const L = await loadLeaflet();
    mapElement.innerHTML = '';

    const map = L.map(mapElement, {
      zoomControl: false,
      minZoom: 2,
      maxZoom: 18,
      scrollWheelZoom: true,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 90,
      touchZoom: true,
      doubleClickZoom: true,
      keyboard: true,
      worldCopyJump: true
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>'
    }).addTo(map);

    const markerLayer = L.layerGroup().addTo(map);
    const filterButtons = document.querySelectorAll('[data-map-filter]');

    const drawProjects = filter => {
      markerLayer.clearLayers();
      const visibleProjects = filter === 'all' ? sampleProjects : sampleProjects.filter(project => project.region === filter);
      const bounds = L.latLngBounds();

      visibleProjects.forEach(project => {
        const icon = L.divIcon({
          className: 'project-map-pin',
          html: `<span class="project-map-pin__pulse ${project.region}" aria-hidden="true"></span><span class="project-map-pin__dot ${project.region}" aria-hidden="true"></span>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
          popupAnchor: [0, -15]
        });
        L.marker(project.coordinates, { icon, title: `${project.city}, ${project.country}` })
          .bindPopup(`<div class="project-map-popup"><span>Demonstration location</span><strong>${project.city}, ${project.country}</strong><p>${project.solution}</p><small>${project.industry}</small></div>`, { closeButton: false, maxWidth: 250 })
          .addTo(markerLayer);
        bounds.extend(project.coordinates);
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, {
          padding: window.innerWidth < 700 ? [28, 28] : [48, 48],
          maxZoom: filter === 'india' ? 5 : 4
        });
      }
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(item => {
          const selected = item === button;
          item.classList.toggle('active', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
        drawProjects(button.dataset.mapFilter);
      });
    });

    drawProjects('all');
    window.setTimeout(() => map.invalidateSize({ pan: false }), 120);
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => map.invalidateSize({ pan: false })).observe(mapElement);
    }
  } catch (error) {
    mapElement.dataset.ready = 'false';
    mapElement.innerHTML = `<div class="map-fallback"><strong>The interactive map could not load.</strong><span>Please check your internet connection. Project locations remain sample data.</span></div>`;
  }
}

function bindPageEvents() {
  initProjectMap();
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `IEC enquiry — ${data.get('interest')}`;
    const body = [`Name: ${data.get('name')}`, `Company: ${data.get('company') || '—'}`, `Email: ${data.get('email')}`, `Phone: ${data.get('phone') || '—'}`, `Requirement: ${data.get('interest')}`, '', data.get('message')].join('\n');
    showToast('Opening your email app…');
    window.location.href = `mailto:iec.hyderabad@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  mobileMenu.classList.toggle('open', !open);
  mobileMenu.setAttribute('aria-hidden', String(open));
  document.body.classList.toggle('menu-open', !open);
});

const mega = document.querySelector('#mega-menu');
function closeMega() {
  mega.classList.remove('open');
  mega.setAttribute('aria-hidden', 'true');
  mega.dataset.menu = '';
  document.querySelectorAll('[data-menu]').forEach(item => item.setAttribute('aria-expanded', 'false'));
}

document.querySelectorAll('[data-menu]').forEach(button => {
  button.addEventListener('click', () => {
    const wasOpen = mega.classList.contains('open') && mega.dataset.menu === button.dataset.menu;
    mega.innerHTML = wasOpen ? '' : megaMarkup(button.dataset.menu);
    if (!wasOpen) applyCleanRoutes(mega);
    mega.dataset.menu = wasOpen ? '' : button.dataset.menu;
    mega.classList.toggle('open', !wasOpen);
    mega.setAttribute('aria-hidden', String(wasOpen));
    document.querySelectorAll('[data-menu]').forEach(item => item.setAttribute('aria-expanded', String(!wasOpen && item === button)));
  });
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) {
    closeMega();
  }
});

mega.addEventListener('click', event => {
  if (event.target === mega) closeMega();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMega();
});

render();

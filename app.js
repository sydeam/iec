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

// Technical configurations are illustrative, not guaranteed product ratings.
const company = {
  phone: '+918500236688', phoneLabel: '+91 85002 36688',
  additionalPhone: '+919440083166', additionalPhoneLabel: '+91 94400 83166',
  landline: '+914023095559', landlineLabel: '040 2309 5559',
  whatsapp: 'https://wa.me/918500236688',
  location: 'https://share.google/a91lMowz6SQ2Umb3z',
  // Add the client-approved email address here when it is ready.
  email: ''
};

const products = [
  {
    "slug": "motor-control-center",
    "name": "Motor Control Centre (MCC) Panel",
    "short": "IEC Motor Control Centre (MCC) Panels are designed to control, protect and distribute power to multiple electric motors from a centralized electrical assembly.",
    "intro": "MCC panels integrate motor feeders and control equipment into a common panel assembly to support reliable operation of motors used in industrial processes. Depending on the application, the panel may incorporate Direct-On-Line (DOL), Star-Delta, soft starter or Variable Frequency Drive (VFD) feeders. The design can include individual compartments, control circuits, protective devices, metering and communication interfaces.",
    "bullets": [
      "Centralized control and protection for multiple motors.",
      "DOL, Star-Delta, soft starter and VFD feeder options.",
      "Overload, short-circuit and phase-failure protection as specified.",
      "Organized wiring and accessible maintenance arrangements.",
      "Optional PLC, SCADA and remote-monitoring integration.",
      "Expandable feeder arrangements, subject to the original design."
    ],
    "specifications": [
      "System voltage",
      "Typically 415 V AC, 3-phase, 50 Hz",
      "Control voltage",
      "24 V DC, 110 V AC or 230 V AC, as designed",
      "Busbar current",
      "Typical options may range from 400–4000 A; design-specific",
      "Short-circuit withstand",
      "Examples: 25, 36 or 50 kA; must be verified by design",
      "Motor feeders",
      "DOL, Star-Delta, soft starter, VFD",
      "Construction",
      "Fixed or compartmentalized; draw-out options where supported",
      "Enclosure protection",
      "IP42, IP54, IP55 or as required"
    ],
    "applicationText": "Manufacturing plants, water and wastewater treatment, HVAC, pharmaceuticals, cement, food processing, material handling and utilities.",
    "label": "MCC Panels",
    "components": "MCCBs, MPCBs, contactors, overload and protection relays, VFDs and meters."
  },
  {
    "slug": "power-control-center",
    "name": "Power Control Centre (PCC) Panel",
    "short": "IEC PCC Panels are designed for main power distribution, switching, protection and monitoring of electrical power in industrial and commercial installations.",
    "intro": "PCC panels serve as a primary low-voltage distribution point, receiving power from a transformer, generator or other approved source and distributing it to downstream distribution boards, MCCs and electrical loads. Depending on the project, they may incorporate incomer and outgoing ACBs or MCCBs, metering, protection, busbar systems, interlocking and source-changeover arrangements.",
    "bullets": [
      "Centralized main power distribution.",
      "Configurable incomer, bus coupler and outgoing feeders.",
      "High-current copper or aluminium busbar systems.",
      "Electrical metering and protective relaying.",
      "Optional generator or dual-source changeover.",
      "Designed for accessibility, maintainability and future feeder additions."
    ],
    "specifications": [
      "System voltage",
      "Typically 415 V AC, 3-phase, 50 Hz",
      "Main busbar current",
      "Typical options may range from 800–6300 A; design-specific",
      "Incomer",
      "ACB or MCCB, selected to suit the design",
      "Outgoing feeders",
      "ACB, MCCB or other specified devices",
      "Short-circuit rating",
      "Examples may range from 25–100 kA; must be verified",
      "Construction",
      "Fixed or draw-out, where supported",
      "Enclosure protection",
      "IP42–IP55 or as required"
    ],
    "applicationText": "Industrial plants, commercial buildings, hospitals, data centres, infrastructure projects, manufacturing facilities and utility installations.",
    "label": "PCC Panels",
    "components": "ACBs, MCCBs, metering CTs, multifunction meters, protection relays and busbar supports."
  },
  {
    "slug": "programmable-logic-control",
    "name": "Programmable Logic Controller (PLC) Control Panel",
    "short": "IEC PLC Control Panels provide centralized programmable control for industrial machinery, process equipment and automated production systems.",
    "intro": "PLC panels house programmable controllers, input/output modules, power supplies, interface relays, terminal blocks, communication equipment and associated protection devices. They execute programmed logic, monitor field signals and coordinate equipment operation. HMI screens, variable frequency drives, remote I/O and SCADA connectivity can be incorporated according to control-system requirements.",
    "bullets": [
      "Automated control of machines and processes.",
      "Flexible logic configuration and future program changes.",
      "Integration with sensors, actuators, drives and field instruments.",
      "Fault indication, alarms and process-status monitoring.",
      "Optional HMI, Ethernet and industrial communication.",
      "Structured wiring and clearly identified terminals."
    ],
    "specifications": [
      "Control supply",
      "Typically 24 V DC, with suitable AC input supply",
      "PLC type",
      "Compact, modular or safety PLC, as required",
      "I/O configuration",
      "Digital and analogue; project-specific",
      "Communication",
      "Ethernet, Modbus, PROFINET or another supported protocol",
      "Operator interface",
      "HMI, push buttons and selector switches",
      "Enclosure protection",
      "IP42, IP54, IP55 or application-specific"
    ],
    "applicationText": "Manufacturing automation, packaging, conveyors, water treatment, process plants, building automation and machine control.",
    "label": "PLC Control Panels",
    "components": "PLCs, I/O modules, power supplies, interface relays, terminal blocks, HMI and communication equipment."
  },
  {
    "slug": "automatic-power-factor-correction",
    "name": "Automatic Power Factor Correction (APFC) Panel",
    "short": "IEC APFC Panels automatically regulate reactive power compensation to maintain the required power factor in electrical installations as loads vary.",
    "intro": "APFC panels use a power factor controller to switch capacitor-bank stages according to measured power factor and load conditions. Depending on the installation, the assembly may include capacitor-duty contactors or switching devices, capacitors, discharge resistors, protective equipment and detuned reactors where harmonic conditions require them.",
    "bullets": [
      "Automatic capacitor-bank switching.",
      "Improved power factor when correctly sized and configured.",
      "Reduced reactive-power demand from the supply.",
      "Potential reduction in avoidable power-factor penalties.",
      "Modular capacitor steps for changing loads.",
      "Optional detuned reactors for suitable harmonic environments."
    ],
    "specifications": [
      "System voltage",
      "Typically 415 V AC, 3-phase, 50 Hz",
      "Compensation capacity",
      "Illustrative range: 25–1000 kVAr; project-specific",
      "Switching",
      "Capacitor-duty contactors or thyristor switching",
      "Capacitor stages",
      "Fixed or automatic multi-step",
      "Controller",
      "Automatic power factor regulator",
      "Protection",
      "Fuses/MCCBs and thermal protection as designed",
      "Harmonic mitigation",
      "Detuned reactors where required"
    ],
    "applicationText": "Manufacturing plants, commercial complexes, textile mills, cement plants, cold storage, pumping stations and facilities with substantial inductive loads.",
    "label": "APFC Panels",
    "components": "Capacitors, reactors, capacitor-duty switching devices, power factor controllers and protective equipment."
  },
  {
    "slug": "automation-panels",
    "name": "Industrial Automation and Control Panels",
    "short": "IEC Industrial Automation Panels integrate electrical control, motor drives, instrumentation and automation hardware to operate industrial machinery and processes.",
    "intro": "These panels are configured around the customer's operational requirements and may combine PLCs, HMIs, VFDs, soft starters, relays, sensors, safety devices and communication interfaces. They support machine sequencing, process monitoring, speed control, interlocking and integration with higher-level monitoring systems.",
    "bullets": [
      "Customized control logic and equipment integration.",
      "Centralized machine and process operation.",
      "Motor speed and process control using VFDs.",
      "Operator interfaces, alarms and status indication.",
      "Optional remote monitoring and SCADA integration.",
      "Improved consistency and simplified fault diagnosis."
    ],
    "specifications": [
      "Power supply",
      "230 V AC single-phase or 415 V AC three-phase, as required",
      "Control voltage",
      "Typically 24 V DC",
      "Control hardware",
      "PLC, relays, controllers and I/O",
      "Drive options",
      "VFDs and soft starters",
      "Operator interface",
      "HMI, push buttons and indicators",
      "Communication",
      "Ethernet, Modbus, PROFINET or specified protocol",
      "Enclosure",
      "Wall-mounted or floor-mounted, as required"
    ],
    "applicationText": "Packaging, conveyor systems, water treatment, manufacturing, process automation, material handling, machine tools and production lines.",
    "label": "Automation Panels",
    "components": "PLCs, HMIs, drives, soft starters, relays, instrumentation and communication interfaces."
  },
  {
    "slug": "draw-out-panels",
    "name": "Draw-Out Type Low-Voltage Switchgear Panels",
    "short": "IEC Draw-Out Panels use withdrawable switching or feeder units to support convenient inspection, maintenance and replacement of compatible equipment.",
    "intro": "Draw-out construction allows specified circuit breakers or feeder modules to move between defined operating, test and isolated positions, according to the switchgear design. Suitable mechanical interlocks, position indicators, shutters and safety arrangements help control access and prevent incorrect operation. Draw-out construction is a panel configuration that may be used in applicable PCC, MCC and breaker-panel designs.",
    "bullets": [
      "Withdrawable breakers or feeder units where specified.",
      "Defined service, test and isolation positions where supported.",
      "Maintenance access for compatible assemblies.",
      "Mechanical and electrical interlocking options.",
      "Position indication and compartmentalized arrangements.",
      "Designed around a compatible switchgear platform."
    ],
    "specifications": [
      "System voltage",
      "Typically 415 V AC, 3-phase, 50 Hz",
      "Main busbar current",
      "Illustrative options: 800–6300 A; design-specific",
      "Breaker type",
      "Compatible withdrawable ACBs or MCCBs",
      "Short-circuit withstand",
      "Project-specific; must be verified by design",
      "Positions",
      "Service, test and isolated, where supported",
      "Construction",
      "Floor-mounted, compartmentalized assembly"
    ],
    "applicationText": "Critical industrial processes, manufacturing plants, large commercial facilities, infrastructure, data centres and installations requiring maintainable low-voltage distribution.",
    "label": "Draw-Out Panels",
    "components": "Compatible withdrawable breakers, cradles, position indicators, shutters and interlocks."
  },
  {
    "slug": "breaker-panels",
    "name": "Low-Voltage Circuit Breaker Panels",
    "short": "IEC Circuit Breaker Panels provide switching, isolation and electrical fault protection for incoming supplies and outgoing power circuits.",
    "intro": "These panels are designed around the electrical distribution requirements of the installation and may incorporate ACBs, MCCBs or other specified protective switching devices. Depending on the project, they can serve as incomer panels, feeder panels, bus-coupler panels or dedicated circuit-breaker assemblies with metering, protection and interlocking.",
    "bullets": [
      "Centralized switching and circuit protection.",
      "Configurable incomer and outgoing breaker arrangements.",
      "Overload and short-circuit protection when correctly selected.",
      "Optional earth-fault and other protection functions.",
      "Metering, indication and interlocking options.",
      "Fixed or withdrawable construction, as applicable."
    ],
    "specifications": [
      "System voltage",
      "Typically 415 V AC, 3-phase, 50 Hz",
      "Breaker types",
      "ACB, MCCB and other specified devices",
      "Current ratings",
      "Selected to match the load and electrical design",
      "Breaking capacity",
      "Selected according to calculated fault level",
      "Busbar rating",
      "Application-specific",
      "Protection",
      "Overcurrent, short-circuit and specified earth-fault functions",
      "Construction",
      "Fixed or draw-out, where supported"
    ],
    "applicationText": "Main distribution systems, transformer LT sides, generator distribution, industrial plants, commercial buildings and infrastructure.",
    "label": "Circuit Breaker Panels",
    "components": "ACBs, MCCBs, metering, protection relays and switching accessories."
  },
  {
    "slug": "distribution-boards",
    "name": "Electrical Distribution Boards (DBs) and Distribution Boxes",
    "short": "IEC Distribution Boards provide organized distribution of electrical power to multiple outgoing circuits, with suitable switching and protection devices.",
    "intro": "Distribution boards are available in single-phase and three-phase configurations and may be designed for lighting, socket outlets, machinery or dedicated equipment. Depending on the load and installation requirements, they can include MCBs, MCCBs, RCCBs, RCBOs, isolators, busbars and neutral/earth terminals.",
    "bullets": [
      "Organized distribution of outgoing circuits.",
      "Individual circuit protection and isolation.",
      "Configurable single-phase and three-phase arrangements.",
      "Compact wall-mounted or floor-mounted options.",
      "Metal or suitable non-metallic enclosures according to application.",
      "Clear circuit identification and maintenance access."
    ],
    "specifications": [
      "Supply",
      "Typically 230 V single-phase or 415 V three-phase",
      "Outgoing ways",
      "Examples: 4, 6, 8, 12, 16, 18, 24 or customized",
      "Incomer",
      "Isolator, MCB or MCCB as specified",
      "Outgoing protection",
      "MCB, MCCB, RCCB or RCBO as required",
      "Enclosure",
      "Metal or suitable non-metallic enclosure",
      "Protection rating",
      "IP30, IP42, IP54, IP55 or application-specific",
      "Mounting",
      "Flush, surface or floor-mounted, as designed"
    ],
    "applicationText": "Commercial buildings, offices, factories, workshops, residential developments, warehouses, lighting systems and utility areas.",
    "label": "Distribution Boards",
    "components": "MCBs, MCCBs, RCCBs, RCBOs, isolators, busbars and neutral/earth terminals."
  },
  {
    "slug": "specialised-panels",
    "name": "Specialised Electrical Panels and Custom-Built Control Panels",
    "short": "IEC designs and manufactures application-specific electrical panels to meet specialized power distribution, control, protection and automation requirements.",
    "intro": "Specialised panels are engineered around project-specific electrical loads, equipment, operating sequences and site conditions. Possible project configurations, subject to IEC's engineering confirmation, include AMF and generator control panels, synchronizing panels, changeover panels, pump control panels, energy monitoring panels and custom machine-control panels. Each assembly is configured to suit the intended application, control functions, component specifications and installation environment.",
    "bullets": [
      "Application-specific engineering and configuration.",
      "Integration of power, control and protection equipment.",
      "Customized operating sequences and interlocking.",
      "Optional automatic changeover and generator synchronization.",
      "Monitoring, alarms and metering options.",
      "Enclosure and environmental protection selected for the installation."
    ],
    "specifications": [
      "System voltage",
      "230 V AC or 415 V AC, depending on application",
      "Control supply",
      "24 V DC or other specified voltage",
      "Current rating",
      "Based on application and load",
      "Control functions",
      "Application-specific",
      "Protection",
      "Selected according to electrical design",
      "Monitoring",
      "Meters, controllers, alarms and communication as required",
      "Enclosure",
      "Wall-mounted or floor-mounted; application-specific IP rating"
    ],
    "applicationText": "Manufacturing, utilities, infrastructure, water treatment, commercial buildings, generator installations, renewable energy systems and specialized machinery.",
    "label": "Specialised Panels",
    "components": "Application-specific switching, protection, control, metering and monitoring equipment."
  }
].map((product, index) => ({
  ...product,
  image: product.slug === 'distribution-boards' ? null : assetUrl(`${product.slug}.webp`),
  number: String(index + 1).padStart(2, '0')
}));

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

const productLinks = [['All products', '#/products'], ...products.map(p => [p.label, `#/products/${p.slug}`])];
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

function productVisual(product, eager = false) {
  return product.image
    ? `<img src="${product.image}" alt="${product.label} — catalogue image" loading="${eager ? 'eager' : 'lazy'}" width="900" height="680">`
    : '<div class="product-placeholder"><span aria-hidden="true">DB</span><strong>Distribution boards</strong><small>Product photography coming soon</small></div>';
}

const productCard = (product) => `
  <a class="product-card" href="#/products/${product.slug}">
    <span class="number">${product.number}</span>
    <div class="product-image">${productVisual(product)}</div>
    <div><h3>${product.label}</h3><p>${product.short}</p><span class="text-link">Explore product <span aria-hidden="true">↗</span></span></div>
  </a>`;

function homePage() {
  return `
    <section class="hero"><div class="shell hero-grid">
      <div class="hero-content">
        <span class="eyebrow">Industrial Electricals & Controls</span>
        <h1>Powering industry.<br><span>With precision.</span></h1>
        <p class="hero-copy">Electrical panels. Intelligent controls. Engineered around the way your operation needs to perform.</p>
        <div class="button-row"><a class="button button-primary" href="#/products">Explore our products <span aria-hidden="true">↗</span></a><a class="button button-secondary" href="#/contact">Discuss a project</a></div>
        <p class="hero-signature">Stands for quality and commitment.</p>
      </div>
      <figure class="hero-media"><img src="${assetUrl('hero-engineering.webp')}" alt="Electrical control panels and industrial engineering" width="1600" height="681" fetchpriority="high"><figcaption><span>POWER · CONTROL · AUTOMATION</span><a href="#/about">Meet IEC ↗</a></figcaption></figure>
    </div></section>
    <div class="capability-bar"><div class="shell"><span>Built around your application</span><a href="#/products/power-control-center">Power distribution ↗</a><a href="#/products/motor-control-center">Motor control ↗</a><a href="#/products/automation-panels">Industrial automation ↗</a></div></div>
    <section class="section"><div class="shell intro-grid">
      <div class="intro-copy"><span class="eyebrow">Meet your engineering partner</span><h2>Behind every operation.<br>A considered solution.</h2><p>Industrial Electricals & Controls is a Hyderabad-based manufacturer of low-voltage electrical panels and industrial control systems.</p><p>From panel design and assembly to power distribution and automation, IEC configures solutions around electrical loads, operating sequences and site requirements.</p><a class="text-link" href="#/about">Discover IEC ↗</a></div>
      <div class="intro-visual"><img src="${assetUrl('power-control-center.webp')}" alt="Power control centre panel from the IEC catalogue" loading="lazy" width="900" height="680"><span class="image-caption">Engineered for power distribution and control.</span></div>
    </div></section>
    <section class="section section-soft"><div class="shell">
      <div class="section-head"><div><span class="eyebrow">Our products</span><h2>The right panel.<br>For every requirement.</h2></div><div><p>Nine product families connecting incoming power to final process control. Explore configurations, applications and technical details.</p><a class="text-link" href="#/products">View all products ↗</a></div></div>
      <div class="product-rail">${products.slice(0, 3).map(productCard).join('')}</div>
      <a class="text-link range-link" href="#/products">Explore all nine product families ↗</a>
    </div></section>
    <section class="section section-navy"><div class="shell">
      <div class="section-head"><div><span class="eyebrow">Industries & applications</span><h2>Different industries.<br>The same attention to detail.</h2></div><p>Power distribution, motor control and automation shaped around each operating environment.</p></div>
      <div class="industry-grid">${industries.map(i => `<a class="industry-card" href="#/industries/${i.slug}"><span class="industry-no">${i.number}</span><h3>${i.name}</h3><p>${i.copy}</p></a>`).join('')}</div>
    </div></section>
    <section class="section"><div class="shell process-wrap"><div><span class="eyebrow">Engineering & manufacturing</span><h2>From your brief.<br>To the finished build.</h2>
      <div class="process-list">${[
        ['Understand & design', 'Define the loads, control philosophy, environment and component requirements.'],
        ['Engineer & assemble', 'Coordinate the enclosure, busbars, protection, wiring and control interfaces.'],
        ['Inspect & document', 'Agree the verification requirements and prepare the project documentation.']
      ].map((s,i)=>`<div class="process-step"><strong>0${i+1}</strong><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('')}</div>
      <a class="text-link" href="#/about/process">Explore our approach ↗</a></div>
      <div class="process-visual"><img src="${assetUrl('power-grid.webp')}" alt="Electrical power transmission infrastructure" loading="lazy"></div>
    </div></section>
    <section class="section clients-preview"><div class="shell">
      <div class="section-head"><div><span class="eyebrow">Our clients</span><h2>Connections across industry.</h2></div><a class="text-link" href="#/clients">Explore our client network ↗</a></div>
      <div class="client-grid">${clients.slice(0,5).map(c=>`<a class="client-card" href="#/clients"><img src="${c.image}" alt="${c.name} logo" loading="lazy"><span>${c.name}</span></a>`).join('')}</div>
      <p class="caption">Selected organizations listed in IEC’s company brochure.</p>
    </div></section>
    ${ctaBand('Let’s build what’s next.', 'Share your application, load list or control requirement. Start a conversation with IEC.', 'Discuss your project')}`;
}

function ctaBand(title, copy, label = 'Contact IEC') {
  return `<section class="cta-band"><div class="shell"><div class="cta-panel"><span class="eyebrow">Talk to IEC</span><h2>${title}</h2><p>${copy}</p><div class="button-row"><a class="button button-primary" href="#/contact">${label} <span aria-hidden="true">↗</span></a><a class="button button-secondary" href="tel:${company.phone}">Call ${company.phoneLabel}</a></div></div></div></section>`;
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
  const infoCards = items => items.map((v,i)=>`<div class="info-card"><b>${String(i+1).padStart(2,'0')}</b><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join('');
  const content = {
    company: {
      eyebrow: 'About IEC', title: 'Stands for quality and commitment.',
      copy: 'Industrial Electricals & Controls. Electrical panel manufacturing and industrial control solutions, based in Hyderabad.',
      body: `<section class="section"><div class="shell story-grid"><div class="story-copy"><span class="eyebrow">Our company</span><h2>Engineering begins with understanding.</h2><p>IEC focuses on low-voltage electrical panel manufacturing and industrial electrical controls, bringing together panel design, assembly, power distribution and automation.</p><p>Our range includes MCC, PCC, PLC, APFC, automation, draw-out and circuit breaker panels, distribution boards and custom-built control systems.</p><p>Each project starts with its application: electrical loads, operating sequences, protection requirements and the installation environment. These requirements guide the configuration, component selection and documentation.</p><a class="text-link" href="#/about/process">Explore our manufacturing approach ↗</a></div><div class="story-media"><img src="${assetUrl('power-control-center.webp')}" alt="Power control centre panel from IEC’s catalogue" loading="lazy" width="900" height="680"></div></div></section>
      <section class="section"><div class="shell"><div class="section-head"><div><span class="eyebrow">Our approach</span><h2>Considered at every stage.</h2></div><p>Practical electrical engineering, from the initial requirement to the project-specific assembly.</p></div><div class="value-grid">${infoCards([
        ['Application-led design', 'Configurations shaped around electrical loads, operating conditions and site needs.'],
        ['Connected capabilities', 'Power distribution, motor control, protection and automation within a coordinated project.'],
        ['Maintainable systems', 'Organized wiring, clear circuit identification and access considered in the design.'],
        ['Project documentation', 'Component schedules, drawings and verification requirements agreed for the installation.']
      ])}</div></div></section>${projectFootprintSection()}`
    },
    process: {
      eyebrow: 'Engineering & manufacturing', title: 'A clear path from brief to build.',
      copy: 'Design, fabrication, assembly, inspection and dispatch brought together around your project requirements.',
      body: `<section class="section"><div class="shell"><div class="section-head"><div><span class="eyebrow">Manufacturing approach</span><h2>Details make the difference.</h2></div><p>Scope, component selection and verification are agreed for the specific panel and installation.</p></div><div class="cards-grid">${infoCards([
        ['Requirement & design', 'Review the load list, single-line diagram, control philosophy and site conditions.'],
        ['Engineering & BOM', 'Develop the panel layout, circuit design and project-specific bill of materials.'],
        ['Sheet metal fabrication', 'Prepare the enclosure and compartments for the selected mounting and protection requirements.'],
        ['Busbar processing', 'Configure busbars and connections to suit the approved electrical design.'],
        ['Assembly & wiring', 'Integrate switching, protection, control equipment and clearly identified wiring.'],
        ['Testing & inspection', 'Check the assembly against the agreed project specification and verification plan.'],
        ['Quality assurance', 'Review inspection results and required technical documentation.'],
        ['Packing & dispatch', 'Prepare the completed assembly and accompanying documents for delivery.']
      ])}</div></div></section>`
    },
    quality: {
      eyebrow: 'Quality & certifications', title: 'Quality begins with a clear specification.',
      copy: 'The right design basis, agreed verification and traceable project documentation.',
      body: `<section class="section"><div class="shell"><div class="section-head"><div><span class="eyebrow">Standards & verification</span><h2>Define the requirement.<br>Verify the assembly.</h2></div><p>Relevant standards depend on the panel type, installation and project specification. The following are reference standards, not a declaration of IEC company certification.</p></div><div class="cards-grid">${infoCards([
        ['IEC 61439-1', 'General rules for low-voltage switchgear and controlgear assemblies.'],
        ['IEC 61439-2', 'Requirements for power switchgear and controlgear assemblies.'],
        ['IEC 60947 series', 'Reference requirements for low-voltage switching and control devices.'],
        ['IEC 60204-1', 'Electrical equipment of machinery, where applicable to the installation.'],
        ['Applicable IS/IEC standards', 'The applicable edition and Indian requirements must be agreed for the project.'],
        ['Project verification', 'Confirm design verification, routine verification and supporting test documentation for the specified assembly.']
      ])}</div><div class="technical-note"><strong>Certification and test documentation</strong><p>Ask IEC for the relevant certificates and test reports, including their scope, issuing authority and validity. Certification claims and document downloads will be added only after the supporting records have been verified.</p></div></div></section>`
    }
  }[section];
  if (!content) return notFound();
  return pageHero(content.eyebrow, content.title, content.copy, 'About') + content.body + ctaBand('Let’s engineer the right panel.', 'Discuss the application, technical scope and documentation your project needs.', 'Discuss your project');
}

function productsPage(slug) {
  if (!slug) {
    return pageHero('Our products', 'Power. Control. Possibility.', 'Nine electrical panel families, configured for your application. Explore features, technical options and typical uses.') + `
      <section class="section"><div class="shell"><div class="product-rail">${products.map(productCard).join('')}</div></div></section>` + ctaBand('Which panel fits your project?', 'Share your single-line diagram, load list or control requirement with IEC.', 'Get product guidance');
  }
  const p = products.find(item => item.slug === slug);
  if (!p) return notFound();
  const rows = [];
  for (let i = 0; i < p.specifications.length; i += 2) rows.push(`<tr><th scope="row">${p.specifications[i]}</th><td>${p.specifications[i + 1]}</td></tr>`);
  return pageHero('IEC product range', p.name, p.short, 'Products') + `
    <section class="section"><div class="shell detail-grid"><div class="detail-media">${productVisual(p, true)}</div><div class="detail-copy"><span class="eyebrow">${p.number} / ${String(products.length).padStart(2,'0')}</span><h2>Designed around your operation.</h2><p>${p.intro}</p><div class="button-row"><a class="button button-primary" href="#/contact">Discuss this product ↗</a><a class="button button-secondary" href="#/products">All products</a></div></div></div></section>
    <section class="section"><div class="shell product-information"><div><span class="eyebrow">Features & benefits</span><h2>Built for the details.</h2><ul class="bullet-list">${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div><div><span class="eyebrow">Typical applications</span><h2>Where it works.</h2><p>${p.applicationText}</p><h3>Components & configuration</h3><p>${p.components}</p><p class="caption">Component makes and models are selected against the approved bill of materials and IEC’s confirmed supply and support capability. No brand partnership is implied.</p></div></div></section>
    <section class="section"><div class="shell"><div class="section-head"><div><span class="eyebrow">Technical overview</span><h2>Configuration, made clear.</h2></div><p>Illustrative options from the product brief. Final ratings, fault levels, protection, compliance and availability require IEC’s project-specific engineering confirmation.</p></div><table class="spec-table"><caption>${p.label} — illustrative configurations, not guaranteed ratings</caption><tbody>${rows.join('')}</tbody></table></div></section>` + ctaBand('Let’s define your configuration.', 'Talk to IEC about ratings, layout, component preferences and control requirements.', 'Send your requirement');
}

function industriesPage(slug) {
  if (!slug) {
    return pageHero('Industries', 'Electrical solutions shaped by the application.', 'IEC serves industrial, commercial and infrastructure projects with practical power, motor-control and automation expertise.') + `
      <section class="section section-navy"><div class="shell"><div class="section-head"><div><span class="eyebrow">Applications</span><h2>Explore by operating environment.</h2></div><p>Each industry page connects typical site needs to the relevant IEC solution families.</p></div><div class="industry-grid">${industries.map(i => `<a class="industry-card" href="#/industries/${i.slug}"><span class="industry-no">${i.number}</span><h3>${i.name}</h3><p>${i.copy}</p></a>`).join('')}</div></div></section>` + ctaBand('Your application may be unique. That’s the point.', 'IEC’s custom engineering process begins with how your plant actually works.', 'Discuss an application');
  }
  const i = industries.find(item => item.slug === slug);
  if (!i) return notFound();
  return pageHero('Industry application', i.name, i.copy, 'Industries') + `
    <section class="section"><div class="shell detail-grid"><div class="detail-copy"><span class="eyebrow">Application ${i.number}</span><h2>Connect power, control and performance.</h2><p>IEC combines the relevant distribution, motor-control, automation and custom-engineering capabilities around the site’s operating priorities.</p><ul class="bullet-list">${i.solutions.map(s => `<li>${s}</li>`).join('')}</ul><div class="button-row"><a class="button button-primary" href="#/contact">Discuss this application <span>↗</span></a><a class="button" href="#/industries" style="border-color:var(--line)">All industries</a></div></div><div class="process-visual" ><img src="${assetUrl('power-grid.webp')}" alt="Power infrastructure for ${i.name}"></div></div></section>
    <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Relevant capabilities</span><h2>Start with the system you need.</h2></div><p>IEC can coordinate multiple product families within one project.</p></div><div class="product-directory">${products.slice(0,4).map(p=>`<a class="directory-card" href="#/products/${p.slug}"><img src="${p.image}" alt="${p.name}" loading="lazy"><div><h3>${p.name}</h3><p>${p.short}</p><span class="text-link">Explore <span>↗</span></span></div></a>`).join('')}</div></div></section>` + ctaBand('Bring IEC into the project conversation.', 'Share the application, load and operating context to begin.', 'Contact IEC');
}

function clientsPage() {
  return pageHero('Our clients', 'Trusted across industry and infrastructure.', 'IEC’s brochure highlights relationships spanning manufacturing, pharmaceuticals, infrastructure, public-sector and engineering organizations.') + `
    <section class="section section-soft"><div class="shell"><div class="section-head"><div><span class="eyebrow">Selected organizations</span><h2>A diverse client landscape.</h2></div><p>Logos shown here are reproduced from the company brochure. Their presence indicates a listed client relationship and does not imply endorsement.</p></div><div class="client-grid">${clients.map(c => `<div class="client-card"><img src="${c.image}" alt="${c.name} logo" loading="lazy"><span>${c.name}</span></div>`).join('')}</div></div></section>
    <section class="section"><div class="shell"><div class="testimonial-note"><div><span class="eyebrow">Client testimonials</span><h2>Approved project stories are being prepared.</h2><p>IEC can publish verified client quotes and project outcomes here once approval is received. No placeholder endorsements have been presented as real testimonials.</p></div><span class="pending-badge">Awaiting client approval</span></div></div></section>` + ctaBand('Join IEC’s growing client network.', 'Start with a clear requirement and a responsive engineering conversation.', 'Talk to IEC');
}

function contactPage() {
  const contact = (symbol, label, value, href, external = false) => `<a class="contact-card" href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ''}><b aria-hidden="true">${symbol}</b><div><small>${label}</small><strong>${value}</strong></div></a>`;
  return pageHero('Contact IEC', 'Your next project starts here.', 'Tell us what you need to power, protect or control. Let’s find the right solution.') + `
    <section class="section"><div class="shell contact-grid"><div><span class="eyebrow">Direct contact</span><h2>Speak with the team.</h2><p>Share available ratings, SLDs, load lists, control philosophy or site constraints to help us understand your requirement.</p><div class="contact-list">
      ${contact('↗', 'Primary phone', company.phoneLabel, `tel:${company.phone}`)}
      ${contact('↗', 'Additional phone', company.additionalPhoneLabel, `tel:${company.additionalPhone}`)}
      ${contact('↗', 'Landline', company.landlineLabel, `tel:${company.landline}`)}
      ${contact('W', 'WhatsApp', 'Start a conversation', company.whatsapp, true)}
      ${company.email ? contact('@', 'Email', company.email, `mailto:${company.email}`) : '<div class="contact-card"><b aria-hidden="true">@</b><div><small>Email</small><strong>New company email coming soon</strong><p class="caption">Please call or WhatsApp the team for now.</p></div></div>'}
      ${contact('↗', 'Visit IEC', 'Hyderabad, Telangana — view location', company.location, true)}
    </div></div>
    <form class="contact-form" id="contact-form"><h2>Share your project brief.</h2><p>${company.email ? 'Prepare a message in your email app.' : 'Prepare a message in WhatsApp. Review it before you send.'}</p>
      <div class="field-grid two"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name" maxlength="120"></div><div class="field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization" maxlength="180"></div></div>
      <div class="field-grid two"><div class="field"><label for="email">Work email *</label><input id="email" type="email" name="email" required autocomplete="email" maxlength="254"></div><div class="field"><label for="phone">Phone</label><input id="phone" type="tel" name="phone" autocomplete="tel" maxlength="40"></div></div>
      <div class="field"><label for="interest">Requirement</label><select id="interest" name="interest"><option>Electrical panel requirement</option>${products.map(p=>`<option>${p.label}</option>`).join('')}<option>General enquiry</option></select></div>
      <div class="field"><label for="message">Project details *</label><textarea id="message" name="message" required maxlength="4000" placeholder="Application, ratings, quantity, location and timeline."></textarea></div>
      <div class="button-row"><button class="button button-primary" type="submit">${company.email ? 'Prepare email' : 'Continue to WhatsApp'} <span aria-hidden="true">↗</span></button></div><p class="form-note">This website does not store your form data. ${company.email ? 'Your email app handles sending.' : 'WhatsApp opens with your brief; nothing is sent automatically.'}</p>
    </form></div></section>`;
}

function notFound() {
  return pageHero('404', 'This circuit doesn’t go anywhere.', 'The page you requested could not be found.') + `<section class="section"><div class="shell"><a class="button button-primary" href="#/">Return home</a></div></section>`;
}

function footer() {
  return `<div class="shell"><div class="footer-grid"><div class="footer-brand"><img src="${assetUrl('iec-logo.webp')}" alt="IEC" width="106" height="70"><h3>Industrial Electricals & Controls</h3><p>Stands for quality and commitment.</p><p>Low-voltage electrical panels, power distribution and industrial controls. Hyderabad, India.</p><a class="text-link" href="#/contact">Let’s talk about your project ↗</a></div><div class="footer-nav"><div><h3>Explore</h3><a href="#/about">About IEC</a><a href="#/about/quality">Quality & standards</a><a href="#/industries">Industries</a><a href="#/products">All products</a><a href="#/clients">Our clients</a></div><div><h3>Products</h3>${products.slice(0,5).map(p=>`<a href="#/products/${p.slug}">${p.label}</a>`).join('')}</div><div><h3>Contact</h3><a href="tel:${company.phone}">${company.phoneLabel}</a><a href="tel:${company.additionalPhone}">${company.additionalPhoneLabel}</a><a href="tel:${company.landline}">${company.landlineLabel}</a><a href="${company.whatsapp}" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="${company.location}" target="_blank" rel="noreferrer">Find us ↗</a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Industrial Electricals & Controls.</span><span>Power · Control · Automation</span></div></div>`;
}

function menuMarkup() {
  const group = (title, links) => `<details class="mobile-group"><summary>${title}</summary><div class="mobile-subnav">${links.map(l => `<a href="${l[1]}">${l[0]}</a>`).join('')}</div></details>`;
  return `<a href="#/">Home <span aria-hidden="true">↗</span></a>${group('About IEC', aboutLinks)}${group('Industries', industryLinks)}${group('Products', productLinks)}<a href="#/clients">Our Clients <span aria-hidden="true">↗</span></a><a href="#/contact">Contact Us <span aria-hidden="true">↗</span></a><div class="mobile-contact"><strong>Have a project requirement?</strong><p>Call ${company.phoneLabel} or start a conversation.</p><a class="button button-primary" href="${company.whatsapp}" target="_blank" rel="noreferrer">Open WhatsApp ↗</a></div>`;
}

function megaMarkup(key) {
  const config = {
    about: ['About IEC', 'Get to know the company, manufacturing approach and quality credentials.', aboutLinks],
    industries: ['Industries', 'Explore electrical solutions shaped around specific operating environments.', industryLinks],
    products: ['Products', 'Browse nine product families for power, control and automation.', productLinks]
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
    showToast(company.email ? 'Opening your email app…' : 'Opening WhatsApp — review your brief before sending.');
    window.location.href = company.email
      ? `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      : `${company.whatsapp}?text=${encodeURIComponent(subject + '\n\n' + body)}`;
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
const main = document.querySelector('#main-content');
const siteFooter = document.querySelector('#site-footer');
const whatsappFab = document.querySelector('.whatsapp-fab');
const desktopMedia = window.matchMedia('(min-width: 1180px)');

function setMobileMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.inert = !open;
  document.body.classList.toggle('menu-open', open);
  [main, siteFooter, whatsappFab].forEach(element => { element.inert = open; });
  if (open) closeMega();
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMobileMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu.addEventListener('click', event => {
  if (event.target.closest('a')) setMobileMenu(false);
});
desktopMedia.addEventListener('change', () => {
  setMobileMenu(false);
  closeMega();
});

const mega = document.querySelector('#mega-menu');
const navButtons = [...document.querySelectorAll('.desktop-nav button[data-menu]')];
let activeMegaButton;
function closeMega(restoreFocus = false) {
  mega.classList.remove('open');
  mega.setAttribute('aria-hidden', 'true');
  mega.dataset.menu = '';
  navButtons.forEach(item => item.setAttribute('aria-expanded', 'false'));
  if (restoreFocus) activeMegaButton?.focus();
}
navButtons.forEach(button => {
  button.setAttribute('aria-controls', 'mega-menu');
  button.addEventListener('click', () => {
    const wasOpen = mega.classList.contains('open') && mega.dataset.menu === button.dataset.menu;
    activeMegaButton = button;
    mega.innerHTML = wasOpen ? '' : megaMarkup(button.dataset.menu);
    if (!wasOpen) {
      mega.querySelector('.mega-inner').insertAdjacentHTML('beforeend', '<button class="mega-close" type="button" aria-label="Close navigation menu">×</button>');
      mega.querySelector('.mega-close').addEventListener('click', () => closeMega(true));
      applyCleanRoutes(mega);
    }
    mega.dataset.menu = wasOpen ? '' : button.dataset.menu;
    mega.classList.toggle('open', !wasOpen);
    mega.setAttribute('aria-hidden', String(wasOpen));
    navButtons.forEach(item => item.setAttribute('aria-expanded', String(!wasOpen && item === button)));
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMega();
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.site-header')) closeMega();
});
mega.addEventListener('click', event => {
  if (event.target === mega) closeMega(true);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMega(true);
    if (mobileMenu.classList.contains('open')) setMobileMenu(false, true);
  }
  if (event.key !== 'Tab' || !mobileMenu.classList.contains('open')) return;
  const focusable = [toggle, ...mobileMenu.querySelectorAll('a, summary, button')].filter(el => el.getClientRects().length);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

render();
setMobileMenu(false);

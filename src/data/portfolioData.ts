import { ProjectDetail, SkillCategory, EducationItem, CertificationItem, SocialLink } from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION - ABINA KUMAR
 * ============================================================================
 * Central configuration file for all portfolio data, assets, and contact details.
 */

/**
 * ----------------------------------------------------------------------------
 * 1. PORTRAIT PHOTO CONFIGURATION
 * ----------------------------------------------------------------------------
 * When Abina's real photo is ready:
 * 1. Place the photo in `/public/assets/abina_kumar.jpg` (or your chosen path).
 * 2. Update `imagePath` below to point to that asset.
 * 3. Set `hasActualPhoto: true`.
 * The UI will seamlessly render the genuine photograph inside the bespoke frame!
 */
export const PORTRAIT_CONFIG = {
  // Path to the image file (relative to public directory, e.g., '/assets/abina_kumar.jpg')
  imagePath: '', 
  // Set to true once a real photo asset is supplied in the public assets directory
  hasActualPhoto: false, 
  altText: 'Abina Kumar - Computer Science & Engineering Student and UI/UX Designer',
};

/**
 * ----------------------------------------------------------------------------
 * 2. RESUME FILE CONFIGURATION
 * ----------------------------------------------------------------------------
 * When the actual resume PDF is ready:
 * 1. Save the PDF to `/public/assets/Abina_K_Resume.pdf`.
 * 2. Set `isAvailable: true` below.
 * Once `isAvailable: true`, clicking "Download Resume" downloads the file directly.
 * While `isAvailable: false`, an informative dialog opens with instructions and preview.
 */
export const RESUME_CONFIG = {
  filePath: '/assets/Abina_K_Resume.pdf',
  isAvailable: false, // Switch to true when PDF is placed in public/assets/
  fileName: 'Abina_K_Resume.pdf',
  lastUpdated: 'October 2025',
};

/**
 * ----------------------------------------------------------------------------
 * 3. PERSONAL INFORMATION
 * ----------------------------------------------------------------------------
 */
export const PERSONAL_INFO = {
  name: 'Abina K',
  fullName: 'Abina Kumar',
  degree: 'B.E. Computer Science and Engineering',
  role: 'Computer Science & Engineering Student',
  specialization: 'UI/UX Design & User-Centered Engineering',
  institution: 'KPR Institute of Engineering and Technology',
  location: 'Coimbatore, Tamil Nadu, India',
  studyPeriod: '2024–2028',
  cgpa: '8.07 / 10',
  cgpaNote: 'Through the 2nd semester',
  
  heroEyebrow: 'COMPUTER SCIENCE & ENGINEERING',
  heroMainHeading: "Hi, I'm Abina K.",
  heroSupportingHeadline: 'Designing thoughtful digital experiences. Exploring technology with purpose.',
  heroIntro: "I'm a Computer Science and Engineering student interested in UI/UX design, intuitive interfaces and technology-driven problem-solving. I enjoy exploring ideas, understanding problems and turning them into meaningful digital experiences.",
  
  aboutLabel: 'ABOUT ME',
  aboutHeading: 'Curious by nature. Thoughtful by design.',
  aboutContent: "I'm a Computer Science and Engineering student exploring the intersection of technology, design and practical problem-solving. I enjoy learning new concepts, working on technical projects and discovering ways to make digital experiences more intuitive and useful.",

  contactEmail: 'abinakumar007@gmail.com',
  contactPhone: '+91 1234567891',
  contactPhoneNote: 'Supplied contact number (verify before final publication)',
};

/**
 * ----------------------------------------------------------------------------
 * 4. SOCIAL & PROFILE LINKS
 * ----------------------------------------------------------------------------
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abina-kumar-62a826327/',
    username: 'abina-kumar-62a826327',
    isConfigured: true,
    type: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/abinakumar007-debug',
    username: 'abinakumar007-debug',
    isConfigured: true,
    type: 'github',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Abina007/',
    username: 'Abina007',
    isConfigured: true,
    type: 'leetcode',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/24cs0051',
    username: '24cs0051',
    isConfigured: true,
    type: 'hackerrank',
  },
  {
    name: 'CodeTantra SEA',
    url: 'https://kpriet.codetantra.com/secure/home/courses.jsp',
    username: 'KPRIET Portal',
    isConfigured: true,
    type: 'codetantra',
  },
  {
    name: 'CodeChef',
    url: '#',
    username: 'Profile pending',
    isConfigured: false, // Configurable until verified public profile URL is supplied
    type: 'codechef',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 5. FEATURED PROJECTS
 * ----------------------------------------------------------------------------
 */
export const PROJECTS: ProjectDetail[] = [
  {
    id: 'aqua-velo',
    title: 'AQUA VELO',
    subtitle: 'Water-Powered Car',
    featured: true,
    shortDescription: 'This project demonstrates a water-powered vehicle model that explores gravitational force, water pressure, hydrodynamics and energy conversion to generate motion without fuel or electricity.',
    fullOverview: 'Aqua Velo is an eco-kinetic engineering prototype exploring alternative propulsion mechanics. By harnessing fluid pressure gradients, gravitational potential, and nozzle constriction hydrodynamics, the model converts stored hydraulic potential energy into continuous directional kinetic motion.',
    problem: 'Modern transportation remains reliant on fossil fuels and chemical batteries, both carrying environmental lifecycle impacts. The challenge was to model a clean, fuel-less, zero-emission kinetic propulsion mechanism using natural hydrodynamics and gravity.',
    solution: 'Designed and fabricated a kinetic vehicular chassis incorporating a pressurized hydraulic chamber, precision constriction nozzle, and hydrodynamic propulsion conduit that systematically converts fluid displacement force into linear drive axle rotation.',
    technologies: ['Hydrodynamics', 'Kinetic Conversion', 'Fluid Mechanics', 'Pressure Nozzle Dynamics', 'Mechanical Prototyping'],
    actualContribution: 'Conducted core hydrodynamic calculations, physical prototype chassis design, nozzle constriction tests, pressure dissipation analysis, and documented the mechanical propulsion principles.',
    processAndWorkflow: [
      'Conception & mechanical physics evaluation of fluid pressure dynamics',
      'Chassis CAD & hydrodynamic channel dimensioning',
      'Nozzle constriction testing for optimal impulse-to-displacement ratio',
      'Experimental run logging: distance vs. chamber volume pressure curves',
    ],
    resultsAndLearnings: [
      'Demonstrated direct mechanical propulsion without electrical battery or combustible fuel',
      'Gained deep practical insight into fluid mechanics, aerodynamic drag resistance, and energy conservation',
    ],
    futureImprovements: [
      'Integrating pneumatic secondary compression to lengthen impulse duration',
      'Lightweight carbon-composite chassis iteration to improve power-to-weight ratio',
      'Digital flow sensor logging via microcontroller for real-time impulse telemetry',
    ],
    academicContext: 'Engineering physics and mechanics prototype project',
    isConceptualVisual: true,
    visualType: 'water-car',
  },
  {
    id: 'innovsense',
    title: 'INNOVSENSE',
    subtitle: 'Alcohol Detection and Automatic Engine Cut-Off System',
    featured: false,
    shortDescription: "An embedded system designed to detect alcohol in a driver's breath using an MQ-3 alcohol sensor. When the configured threshold is exceeded, the system activates a warning buzzer and triggers an engine cut-off mechanism.",
    fullOverview: 'InnovSense is an embedded automotive safety prototype designed to prevent intoxicated driving proactively. The system continuously samples atmospheric ethanol concentrations near the steering cluster. If the calibrated BAC safety threshold is breached, the microcontroller immediately signals an audio alert and disengages the ignition circuit through a high-reliability MOSFET switch.',
    problem: 'Drunk driving remains a leading cause of preventable road traffic fatalities worldwide. Post-incident enforcement does not prevent collisions; a vehicle-side proactive prevention mechanism is required.',
    solution: 'Engineered an embedded microcontroller loop coupled to a calibrated MQ-3 gas sensor. The firmware processes analog voltage levels, maps ethanol vapor concentration, and manages a fail-safe power cut-off circuit via an N-channel MOSFET and visual/auditory alarms.',
    technologies: ['MQ-3 Sensor', 'Embedded Systems', 'Microcontroller', 'MOSFET', 'Automation', 'Alert System'],
    actualContribution: 'Hardware breadboard layout and wiring, analog sensor calibration script, threshold logic implementation in firmware, MOSFET ignition cutoff testing, and alert signaling sequencing.',
    processAndWorkflow: [
      'Sensor characterization: measuring MQ-3 resistance in ambient vs. vapor conditions',
      'Microcontroller ADC sampling and debounced threshold comparator design',
      'MOSFET gate driver circuit wiring to simulate vehicle ignition interrupt',
      'Buzzer audio-frequency pulsing and status LED indicator routine',
    ],
    resultsAndLearnings: [
      'Reliably cut ignition within 350ms of detecting vapor above configured threshold',
      'Learned embedded sensor latency profiles, heater warm-up duration, and analog noise filtering',
    ],
    futureImprovements: [
      'Integration with GPS / GSM module to send coordinates to emergency contacts or fleet dispatch',
      'Biometric driver verification to prevent passenger breath bypass',
      'Cold-start interlock mechanism compliant with automotive safety certifications',
    ],
    academicContext: 'Embedded systems and automation engineering project',
    isConceptualVisual: true,
    visualType: 'alcohol-detector',
  },
  {
    id: 'smart-weight-monitoring',
    title: 'SMART WEIGHT MONITORING IN PUBLIC AND PRIVATE TRANSPORT',
    subtitle: 'AI/ML-Assisted Overload Prevention System',
    featured: false,
    shortDescription: 'This transport-monitoring project explores the use of load cells and pressure sensors to monitor vehicle load. AI/ML algorithms analyze sensor data to help identify unsafe loading conditions and support alerts or other control responses.',
    fullOverview: 'An intelligent vehicular weight and balance monitoring framework combining distributed load cell strain gauges with machine learning anomaly detection. The system captures weight distribution across axles, detects asymmetric or hazardous loading patterns, and evaluates vehicle stability in transit.',
    problem: 'Commercial and public transport overloading causes severe road degradation, brake failures, rollover accidents, and structural vehicle stress without driver awareness before transit.',
    solution: 'Placed multi-point load cells and pressure sensors at key chassis suspension points. Captured real-time loading profiles and analyzed sensor variance using ML classification algorithms to detect hazardous load imbalances, triggering audio-visual driver warnings and telemetry data streams.',
    technologies: ['Load Cells', 'Pressure Sensors', 'Microcontroller', 'AI/ML', 'Embedded C / Python', 'IoT — Wi-Fi / GSM'],
    actualContribution: 'Assisted in sensor data collection methodologies, exploratory data analysis of load curves, firmware ADC integration for strain gauges, and co-authoring the conference research paper.',
    processAndWorkflow: [
      'Suspension load sensor array configuration and calibration matrix',
      'Data collection across multiple load scenarios (balanced, over-limit, side-biased)',
      'Exploratory data analysis and feature extraction using Python data science libraries',
      'Paper documentation and peer-reviewed presentation at CIT, Coimbatore',
    ],
    resultsAndLearnings: [
      'Presented research paper at Coimbatore Institute of Technology (CIT), Coimbatore',
      'Gained practical experience bridging hardware data acquisition with statistical machine learning',
    ],
    futureImprovements: [
      'Cloud fleet management dashboard with geofenced weigh-station automation',
      'Edge-ML inference directly on a low-power microcontroller (TinyML)',
      'Dynamic speed governor linkage based on active payload weight',
    ],
    academicContext: 'Research paper presented at CIT, Coimbatore',
    isConceptualVisual: true,
    visualType: 'weight-monitoring',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 6. SKILLS & TECHNOLOGIES
 * ----------------------------------------------------------------------------
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for algorithm design, software development, and embedded computing.',
    skills: [
      { name: 'C', levelDescription: 'Embedded firmware, pointer math, low-level mechanics', highlight: true },
      { name: 'Python', levelDescription: 'Data science, scripting, algorithm design', highlight: true },
      { name: 'Java', levelDescription: 'Object-oriented programming, class design', highlight: true },
    ],
  },
  {
    title: 'Web Development',
    description: 'Foundations for responsive web layouts and interface construction.',
    skills: [
      { name: 'HTML', levelDescription: 'Semantic structure, accessibility, DOM hierarchy' },
      { name: 'CSS', levelDescription: 'Modern layouts, flexbox, grid, styling system' },
    ],
  },
  {
    title: 'Platforms & Tools',
    description: 'Development environments, simulation platforms, and data science notebooks.',
    skills: [
      { name: 'GitHub', levelDescription: 'Version control, repositories, collaboration' },
      { name: 'Google Colab', levelDescription: 'Cloud Python execution, ML experimentation' },
      { name: 'Kaggle', levelDescription: 'Data science competitions, datasets' },
      { name: 'MATLAB', levelDescription: 'Mathematical computing, numerical analysis' },
      { name: 'Tinkercad', levelDescription: 'Circuit simulation, embedded prototyping' },
    ],
  },
  {
    title: 'Coding & Learning Platforms',
    description: 'Continuous algorithmic problem solving and technical evaluation platforms.',
    skills: [
      { name: 'LeetCode', levelDescription: 'Data structures & algorithm practice' },
      { name: 'HackerRank', levelDescription: 'Software engineer certified evaluations' },
      { name: 'CodeTantra SEA', levelDescription: 'Institutional automated learning curriculum' },
      { name: 'CodeChef', levelDescription: 'Competitive programming rounds' },
    ],
  },
  /**
   * UI/UX DESIGN TOOLS (CONFIGURABLE)
   * As specified: Keep empty or configurable until Abina adds her verified tools.
   * Do not automatically claim Figma, Adobe XD, Framer or other unverified design tools.
   */
  {
    title: 'UI/UX Design Tools',
    description: 'Design software & user-centered prototyping tool stack.',
    skills: [
      // Populated dynamically or when configured by owner.
    ],
    isConfigurableUIUX: true,
  },
];

/**
 * ----------------------------------------------------------------------------
 * 7. EDUCATION HISTORY
 * ----------------------------------------------------------------------------
 */
export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024–2028',
    score: '8.07 / 10 CGPA',
    scoreLabel: 'Academic Score',
    highlights: [
      'CGPA: 8.07/10 through the second semester',
      'Active focus on UI/UX design, interactive systems, and core computer science',
      'Participant in campus engineering prototyping and technical symposiums',
    ],
    active: true,
  },
  {
    institution: 'PKV Government Higher Secondary School, Mookkareddipatti',
    location: 'Dharmapuri, Tamil Nadu',
    degree: 'Higher Secondary Certificate (HSC) — Mathematics and Biology',
    period: '2022–2024',
    score: '88.67%',
    scoreLabel: 'Board Examination Score',
    highlights: [
      'Comprehensive foundation in Higher Mathematics, Physics, Chemistry, and Biology',
      'Rigorous analytical problem-solving and academic consistency',
    ],
  },
  {
    institution: 'PKV Government Higher Secondary School, Mookkareddipatti',
    location: 'Dharmapuri, Tamil Nadu',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2021–2022',
    score: '89.2%',
    scoreLabel: 'Board Examination Score',
    highlights: [
      'Strong distinction across Science, Mathematics, and Languages',
      'Foundational preparation for advanced STEM higher secondary curriculum',
    ],
  },
];

/**
 * ----------------------------------------------------------------------------
 * 8. CERTIFICATIONS
 * ----------------------------------------------------------------------------
 */
export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Python Libraries for Data Science',
    date: 'October 21, 2025',
    issuer: 'Data Science & Scientific Computing',
    verificationUrl: '', // Configurable verification URL
    certificateAssetPath: '', // Configurable path to scanned PDF/JPG
  },
  {
    id: 'cert-2',
    title: 'Power BI for Beginners',
    date: 'July 19, 2025',
    issuer: 'Business Intelligence & Data Visualization',
    verificationUrl: '',
    certificateAssetPath: '',
  },
  {
    id: 'cert-3',
    title: 'NPTEL — Responsible and Safe AI Systems',
    date: 'October 2025',
    issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
    verificationUrl: '',
    certificateAssetPath: '',
  },
  {
    id: 'cert-4',
    title: 'HackerRank — Software Engineer',
    date: 'December 2025',
    issuer: 'HackerRank Skills Assessment',
    verificationUrl: '',
    certificateAssetPath: '',
  },
];

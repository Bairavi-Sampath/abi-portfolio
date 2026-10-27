import { ProjectDetail, SkillCategory, EducationItem, CertificationItem, SocialLink } from '../types';

/**
 * ============================================================================
 * PORTFOLIO DATA - ABINA K
 * ============================================================================
 * Authentic portfolio configuration, projects, education, and contact details.
 */

export const PORTRAIT_CONFIG = {
  imagePath: '/assets/abina-portfolio-graphic.png',
  hasActualPhoto: true,
  altText: 'Circular profile graphic of Abina K featuring professional portrait in orange circular frame with skill badges',
};

export const RESUME_CONFIG = {
  filePath: '/resume.pdf',
  isAvailable: true,
  fileName: 'Abina_K_Resume.pdf',
  lastUpdated: 'October 2025',
};

export const PERSONAL_INFO = {
  name: 'Abina K',
  fullName: 'Abina Kumar',
  degree: 'B.E. Computer Science and Engineering',
  role: 'Computer Science & Engineering Student',
  specialization: 'UI/UX Design & Software Development',
  institution: 'KPR Institute of Engineering and Technology',
  location: 'Coimbatore, Tamil Nadu, India',
  studyPeriod: '2024–2028',
  cgpa: '8.4 / 10',
  cgpaNote: 'Through 4th semester',
  
  heroEyebrow: 'COMPUTER SCIENCE & ENGINEERING',
  heroMainHeading: "Hi, I'm Abina K.",
  heroSupportingHeadline: 'I enjoy creating useful digital experiences and exploring how technology can solve real-world problems.',
  heroIntro: "I'm a Computer Science and Engineering student interested in UI/UX design, software development, and technology. I enjoy learning new skills, working on projects, and turning ideas into practical solutions.",
  
  aboutLabel: 'ABOUT ME',
  aboutHeading: 'A curious mind with a love for creating.',
  aboutContent: "I'm a Computer Science and Engineering student who enjoys exploring technology, designing simple interfaces, and learning by building. I like turning ideas into practical solutions and discovering something new along the way.",
  aboutSupportingContent: "I'm interested in understanding how software and hardware work together. Through my classes and projects, I'm building my programming skills, exploring UI/UX design, and learning how technology can solve everyday problems.",

  contactEmail: 'abinakumar007@gmail.com',
  contactPhone: '+91 8778231019',
  contactPhoneNote: 'Direct phone contact',
};

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
    url: 'https://www.codechef.com/users/kpr24cs005',
    username: 'kpr24cs005',
    isConfigured: true,
    type: 'codechef',
  },
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'aqua-velo',
    title: 'AQUA VELO',
    subtitle: 'Water-Powered Car Model',
    category: 'PHYSICS & MECHANICS',
    featured: true,
    shortDescription: 'AQUA VELO is a prototype car designed to demonstrate motion using water pressure and gravity. The project explores how fluid movement and mechanical design can work together to create motion without a conventional fuel-powered motor.',
    fullOverview: 'AQUA VELO is an experimental prototype exploring fuel-free propulsion through fluid dynamics. By using gravity and pressurized water displacement channeled through a constriction nozzle, the system demonstrates the conversion of potential and kinetic energy into forward vehicular motion.',
    problem: 'Conventional propulsion depends on fossil fuels or chemical batteries, both carrying environmental impacts. This project explores whether clean, zero-emission impulse can be generated mechanically using water pressure and gravity.',
    solution: 'Engineered a vehicular chassis featuring a pressurized hydraulic chamber, constriction nozzle, and directional impulse geometry that converts fluid displacement into mechanical wheel rotation.',
    technologies: ['Fluid Mechanics', 'Hydrodynamics', 'Kinetic Energy', 'Mechanical Prototyping'],
    actualContribution: 'Designed the physical prototype chassis, tested nozzle shapes for water pressure, measured traveling distance across multiple runs, and documented the propulsion mechanics.',
    processAndWorkflow: [
      'Researched fluid pressure dynamics and nozzle impulse forces',
      'Designed the chassis layout and water chamber mounts',
      'Tested various nozzle constriction sizes to maximize distance',
      'Logged experimental test runs measuring distance against water volume',
    ],
    resultsAndLearnings: [
      'Successfully demonstrated vehicle movement using only water pressure and gravity without batteries or fuel',
      'Gained hands-on understanding of fluid flow, aerodynamic drag, and mechanical energy conservation',
    ],
    futureImprovements: [
      'Experimenting with lighter materials to improve the power-to-weight ratio',
      'Adding digital pressure and flow sensors to log performance data automatically',
    ],
    academicContext: 'Engineering physics and mechanics prototype project',
    isConceptualVisual: true,
    visualType: 'water-car',
  },
  {
    id: 'innovsense',
    title: 'INNOVSENSE',
    subtitle: 'Alcohol Detection & Automatic Engine Cut-Off',
    category: 'EMBEDDED SYSTEMS & AUTOMATION',
    featured: false,
    shortDescription: 'INNOVSENSE explores a vehicle safety system that detects alcohol vapour using an MQ-3 sensor. When a configured threshold is exceeded, the system can trigger a warning buzzer and a prototype ignition cut-off circuit.',
    fullOverview: 'INNOVSENSE is an embedded automotive safety prototype designed to prevent intoxicated driving before a vehicle can be operated. An MQ-3 gas sensor continuously monitors ambient vapour levels; when readings surpass the configured safety threshold, the system sounds an acoustic buzzer and disengages the ignition switch circuit via a power MOSFET.',
    problem: 'Impaired driving is a leading factor in preventable roadway accidents. Active, in-cabin automated interlocks can detect alcohol presence and cut off ignition before the vehicle operates.',
    solution: 'Interfaced an MQ-3 alcohol sensor with a microcontroller ADC. Upon detecting vapour levels beyond the threshold, the microcontroller triggers an acoustic buzzer and interrupts the ignition loop through an N-channel power MOSFET.',
    technologies: ['MQ-3 Gas Sensor', 'Microcontroller and ADC', 'Buzzer Alert', 'MOSFET Switching', 'Embedded Systems'],
    actualContribution: 'Wired the prototype circuit on a breadboard, calibrated the MQ-3 sensor thresholds, wrote the microcontroller firmware logic, and tested the automatic cutoff switch under simulated conditions.',
    processAndWorkflow: [
      'Tested MQ-3 sensor resistance in normal air versus alcohol vapor conditions',
      'Wrote microcontroller code to sample sensor readings and filter electrical noise',
      'Built and tested the MOSFET power cut-off circuit simulating ignition interrupt',
      'Connected warning buzzers and indicator LEDs for clear driver alerts',
    ],
    resultsAndLearnings: [
      'Reliably cut ignition within milliseconds of detecting alcohol vapor above the threshold',
      'Learned how gas sensors operate, how warm-up cycles affect readings, and how to control circuits with MOSFETs',
    ],
    futureImprovements: [
      'Adding GPS and GSM modules to send alerts to fleet managers or emergency contacts',
      'Adding driver face verification to ensure only the driver is being tested',
    ],
    academicContext: 'Embedded systems and automation engineering project',
    isConceptualVisual: true,
    visualType: 'alcohol-detector',
  },
  {
    id: 'smart-weight-monitoring',
    title: 'Smart Weight Monitoring in Transport',
    subtitle: 'Overload Detection & Prevention System',
    category: 'SMART MONITORING & RESEARCH',
    featured: false,
    shortDescription: 'This project explores a vehicle load-monitoring system using axle load cells and pressure sensors. The system aims to estimate vehicle load distribution and identify possible overloading using sensor data and smart analysis.',
    fullOverview: 'A vehicle load-monitoring system integrating axle load cells and pressure sensors to track dynamic weight distribution. Real-time sensor telemetry allows the system to identify potential overloading and axle imbalance conditions, mitigating accident risks and road wear.',
    problem: 'Commercial and public vehicles frequently operate overloaded or with hazardous weight imbalance, degrading braking performance, damaging infrastructure, and causing rollover risks without real-time driver awareness.',
    solution: 'Positioned multi-point load cells and pressure sensors at axle suspension points. Telemetry data is collected to detect overload conditions, alerting operators and providing data for safety logging.',
    technologies: ['Load Cells', 'Pressure Sensors', 'Microcontroller', 'Python', 'AI/ML Analysis'],
    actualContribution: 'Helped set up the sensor calibration matrix, collected and cleaned test data, analyzed load curves using Python, and co-authored a research paper presented at Coimbatore Institute of Technology (CIT).',
    processAndWorkflow: [
      'Configured suspension load sensors and calibrated analog-to-digital converter readings',
      'Collected sensor data under different weight scenarios (balanced, over-limit, and side-tilted)',
      'Analyzed load patterns and tested simple classification algorithms using Python',
      'Co-authored research paper and presented findings at CIT, Coimbatore',
    ],
    resultsAndLearnings: [
      'Presented the research paper at Coimbatore Institute of Technology (CIT), Coimbatore',
      'Gained practical experience connecting physical sensors to computational data analysis',
    ],
    futureImprovements: [
      'Developing a mobile dashboard for real-time load display',
      'Exploring edge machine learning on small microcontrollers for instant predictions',
    ],
    academicContext: 'Research paper presented at Coimbatore Institute of Technology (CIT), Coimbatore.',
    isConceptualVisual: true,
    visualType: 'weight-monitoring',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Languages I use for writing logic, solving problems, and building software.',
    skills: [
      { name: 'Python', levelDescription: 'Data analysis, scripting, and problem solving', highlight: true },
      { name: 'C', levelDescription: 'Hardware logic, pointers, and embedded systems', highlight: true },
      { name: 'Java', levelDescription: 'Object-oriented programming and application fundamentals', highlight: true },
    ],
  },
  {
    title: 'Web Fundamentals',
    description: 'Foundations for building clean, responsive, and accessible web pages.',
    skills: [
      { name: 'HTML', levelDescription: 'Semantic structure and accessible page layout' },
      { name: 'CSS', levelDescription: 'Modern layouts, flexbox, grid, and responsive styling' },
    ],
  },
  {
    title: 'Development Tools & Platforms',
    description: 'Software, cloud environments, and platforms I use for collaboration, testing, and data.',
    skills: [
      { name: 'GitHub', levelDescription: 'Version control and project repositories' },
      { name: 'Google Colab', levelDescription: 'Running Python notebooks and testing data models' },
      { name: 'Kaggle', levelDescription: 'Working with open datasets and data science practice' },
      { name: 'MATLAB', levelDescription: 'Mathematical modeling and simulation' },
      { name: 'Tinkercad', levelDescription: 'Simulating electronic circuits and microcontrollers' },
    ],
  },
  {
    title: 'Problem Solving & Practice',
    description: 'Platforms where I regularly practice data structures, algorithms, and coding questions.',
    skills: [
      { name: 'LeetCode', levelDescription: 'Data structures & algorithm problem-solving' },
      { name: 'HackerRank', levelDescription: 'Skill assessments and coding evaluations' },
      { name: 'CodeTantra SEA', levelDescription: 'Curriculum-guided coding practice' },
      { name: 'CodeChef', levelDescription: 'Participating in programming challenges' },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024–2028',
    score: '8.4 / 10 CGPA',
    scoreLabel: 'Academic Score',
    highlights: [
      'Maintaining an 8.4/10 CGPA through the fourth semester',
      'Focusing on UI/UX design, software development, and core computer science',
      'Participating in campus technical symposiums and engineering prototype projects',
    ],
    active: true,
  },
  {
    institution: 'PKV Government Higher Secondary School, Mookkareddipatti',
    location: 'Dharmapuri, Tamil Nadu',
    degree: 'Higher Secondary Certificate (HSC) — Mathematics and Biology',
    period: '2022–2024',
    score: '88.67%',
    scoreLabel: 'Board Score',
    highlights: [
      'Strong academic foundation in Mathematics, Physics, Chemistry, and Biology',
      'Developed disciplined study habits and analytical problem-solving skills',
    ],
  },
  {
    institution: 'PKV Government Higher Secondary School, Mookkareddipatti',
    location: 'Dharmapuri, Tamil Nadu',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2021–2022',
    score: '89.2%',
    scoreLabel: 'Board Score',
    highlights: [
      'Graduated with distinction across Science, Mathematics, and Languages',
      'Solid preparation for advanced higher secondary studies in STEM',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Python Libraries for Data Science',
    date: 'October 21, 2025',
    issuer: 'Data Science & Scientific Computing',
    verificationUrl: '',
    certificateAssetPath: '',
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

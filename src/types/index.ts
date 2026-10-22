export interface SocialLink {
  name: string;
  url: string;
  username?: string;
  isConfigured: boolean;
  type: 'github' | 'linkedin' | 'leetcode' | 'hackerrank' | 'codetantra' | 'codechef' | 'email' | 'phone';
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  technologies: string[];
  actualContribution: string;
  processAndWorkflow: string[];
  resultsAndLearnings: string[];
  futureImprovements: string[];
  academicContext?: string;
  isConceptualVisual: boolean;
  visualType: 'water-car' | 'alcohol-detector' | 'weight-monitoring';
  customImagePath?: string; // Replaceable with real prototype photo
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    levelDescription?: string;
    highlight?: boolean;
  }[];
  isConfigurableUIUX?: boolean;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights?: string[];
  active?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  date: string;
  verificationUrl?: string; // Configurable verification link
  certificateAssetPath?: string; // Configurable path to scanned certificate
}

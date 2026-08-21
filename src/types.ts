export type PageRoute =
  | 'home'
  | 'services'
  | 'cloud-transformation'
  | 'ai-genai'
  | 'platform-engineering'
  | 'corporate-training'
  | 'staff-augmentation'
  | 'solutions'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'assessment';

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  route: PageRoute;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
}

export interface ReferenceArchitecture {
  id: string;
  title: string;
  category: 'Cloud Migration' | 'Enterprise AI' | 'AIOps' | 'FinOps';
  summary: string;
  challenge: string;
  solution: string;
  architectureComponents: {
    name: string;
    description: string;
    category: string;
  }[];
  potentialOutcomes: string[];
  workflowSteps: {
    step: string;
    title: string;
    details: string;
  }[];
  technologies: string[];
}

export interface ConsultationFormData {
  name: string;
  businessEmail: string;
  company: string;
  jobTitle: string;
  country: string;
  areaOfInterest: string;
  approximateProjectSize: string;
  message: string;
  // Service-specific conditional fields
  trainingTopic?: string;
  participantCount?: string;
  trainingFormat?: string;
  requiredSkills?: string;
  resourceCount?: string;
  engagementDuration?: string;
  preferredStartDate?: string;
}

export interface AssessmentQuestion {
  id: number;
  category: 'Cloud' | 'AI' | 'DevOps' | 'Governance';
  question: string;
  description: string;
  options: {
    label: string;
    score: number;
    insight: string;
  }[];
}

export interface AssessmentResult {
  score: number;
  maturityLevel: 'Foundational' | 'Emerging' | 'Modernized' | 'Cloud & AI Native';
  summary: string;
  keyStrengths: string[];
  priorityGaps: string[];
  recommendedActions: string[];
}

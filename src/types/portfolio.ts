export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'certifications'
  | 'education'
  | 'resume'
  | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Cybersecurity' | 'AI Safety' | 'Industrial Security' | 'Research';
  period: string;
  image: string;
  technologies: string[];
  overview: string;
  problemStatement: string;
  objective: string;
  myContribution: string[];
  keyFeatures: string[];
  implementationDetails: string[];
  resultsAndOutcomes: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  paperConference?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  type: 'Internship' | 'Job Simulation' | 'Virtual Internship';
  workMode: 'Remote' | 'On-site' | 'Hybrid';
  location?: string;
  responsibilities: string[];
  toolsAndTech: string[];
  learningOutcomes: string[];
  projectContributions: string;
  certificateImage?: string;
  verified: boolean;
}

export type SkillProficiency = 'Hands-on Experience' | 'Working Knowledge' | 'Currently Exploring';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  context?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certificate {
  id: string;
  name: string;
  issuingOrganization: string;
  completionDate: string;
  category: 'Cybersecurity' | 'AI & LLM' | 'Cloud & IoT' | 'Academic & Honors' | 'Professional Skills';
  credentialId?: string;
  score?: string;
  image: string;
  description: string;
  verificationNote?: string;
  tags: string[];
}

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  scoreLabel?: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
  relevantCoursework?: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  rankOrHonor: string;
  description: string;
  category: 'Academic' | 'Hackathon' | 'Competition' | 'Workshop';
  certificateImage?: string;
}

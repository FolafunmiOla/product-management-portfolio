export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  summary: string;
  subheading: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: string[];
  images?: CaseStudyImage[];
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  impact: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

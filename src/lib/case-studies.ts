import type { CaseStudy } from '@/types';
import caseStudiesData from '@/data/case-studies.json';

const caseStudies: CaseStudy[] = caseStudiesData;

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.slice(0, 3);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

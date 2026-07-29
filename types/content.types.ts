export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EdgeFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DomainHub {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface CourseSegment {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CatPhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export type FaqCategory = 'course' | 'delivery' | 'partnership' | 'misc';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  companyName: string;
  logoSrc: string;
  logoAlt: string;
  quote: string;
  authorName?: string;
  authorTitle?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

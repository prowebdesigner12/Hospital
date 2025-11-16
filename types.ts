import type { ReactElement } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface TabbableListItem {
  name:string;
  href: string;
  iconBlueUrl: string;
  iconWhiteUrl: string;
}

export interface Award {
    image: string;
    title: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    location: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface Facility {
    icon: ReactElement;
    name: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Benefit {
    icon: ReactElement;
    title: string;
    description: string;
    href: string;
}

export interface InfoCard {
    icon: ReactElement;
    title: string;
    description?: string;
    bgColor: string;
    textColor: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Service {
  image: string;
  category: string;
  title: string;
  href: string;
}

export interface Champion {
  name: string;
  rank: number;
  college: string;
  course: string;
  image: string;
}

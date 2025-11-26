import { LucideIcon } from 'lucide-react';

export interface PriceTier {
  label: string;
  value: string;
}

export interface Pricing {
  withCopay: PriceTier[];
  withoutCopay: PriceTier[];
}

export interface PlanPrices {
  individual: Pricing;
  pme: Pricing;
}

export interface Plan {
  id: string;
  name: string;
  prices: PlanPrices;
  audience: string;
  features: string[];
  highlight: boolean;
  color: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Pharmacy {
  name: string;
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Clinic {
  name: string;
  address: string;
}

export interface NetworkGroup {
  region: string;
  list: string[];
}

export interface NetworkData {
  hospitals: NetworkGroup[];
  labs: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}
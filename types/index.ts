export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  features?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  client: string;
  service: string;
  results: string[];
  images: string[];
  slug: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  featuredImage: string;
  slug: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
} 
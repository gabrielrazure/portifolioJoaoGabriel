export type Lang = 'pt' | 'en';

export interface NavTranslations {
    home: string;
    about: string;
    experience: string;
    contact: string;
    whatsapp: string;
}

export interface HeroTranslations {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
}

export interface AboutTranslations {
    badge: string;
    description1: string;
    description2: string;
    location: string;
    email: string;
    country: string;
}

export interface ExperienceTopic {
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
}

export interface ExperienceTranslations {
    badge: string;
    title: string;
    topics: ExperienceTopic[];
}

export interface CtaTranslations {
    title: string;
    subtitle: string;
    button: string;
}

export interface Translations {
    nav: NavTranslations;
    hero: HeroTranslations;
    about: AboutTranslations;
    experience: ExperienceTranslations;
    cta: CtaTranslations;
}

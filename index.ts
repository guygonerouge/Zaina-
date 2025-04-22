// Define TypeScript types for our application

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

export interface Hobby {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
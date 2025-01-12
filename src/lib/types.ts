import { ExperienceCardProps } from "@/components/resume-generator/experience-card";

export interface ResumeData {
  education: ExperienceCardProps[];
  experience: ExperienceCardProps[];
  projects: ExperienceCardProps[];
  skills: string[];
}
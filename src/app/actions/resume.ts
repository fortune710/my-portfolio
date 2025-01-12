'use server'

import { firestore } from "@/utils/firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { ExperienceCardProps } from "@/components/resume-generator/experience-card";
import { revalidatePath } from "next/cache";

const resumeRef = doc(firestore, "resume", "me");

export async function addExperience(experience: Omit<ExperienceCardProps, "id">) {
  try {
    await updateDoc(resumeRef, {
      experience: arrayUnion(experience)
    });
    revalidatePath('/resume')
    return { success: true };
  } catch (error) {
    console.error("Error adding experience:", error);
    return { success: false, error };
  }
}

export async function addProject(project: Omit<ExperienceCardProps, "id">) {
  try {
    await updateDoc(resumeRef, {
      projects: arrayUnion(project)
    });
    revalidatePath('/resume')
    return { success: true };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, error };
  }
}

export async function addSkill(skill: string) {
  try {
    await updateDoc(resumeRef, {
      skills: arrayUnion(skill)
    });
    revalidatePath('/resume')
    return { success: true };
  } catch (error) {
    console.error("Error adding skill:", error);
    return { success: false, error };
  }
} 
import { ResumeData } from "@/lib/types";
import { firestore } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";


export async function getResumeData(): Promise<ResumeData> {
  const docRef = doc(firestore, "resume", "me");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      education: [],
      experience: [],
      projects: [],
      skills: [],
    }
  }

  return docSnap.data() as ResumeData;
}
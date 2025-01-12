import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSkill } from "@/app/actions/resume";

interface SkillsSectionProps {
  skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [newSkill, setNewSkill] = useState('');

  const addNewSkill = async () => {
    if (newSkill.trim()) {
      //setSkills([...skills, newSkill.trim()]);
      await addSkill(newSkill);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    //setSkills(skills.filter((_, i) => i !== index));
  };
  

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Add a skill..."
        />
        <Button onClick={addNewSkill}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2"
          >
            <span>{skill}</span>
            <button
              onClick={() => removeSkill(index)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="size-3"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 
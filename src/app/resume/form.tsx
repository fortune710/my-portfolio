'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Section } from '@/components/resume-generator/section';
import { ExperienceCard, ExperienceCardProps } from '@/components/resume-generator/experience-card';
import { SkillsSection } from '@/components/resume-generator/skills-section';
import { Label } from '@/components/ui/label';
import createResume from '@/services/gemini';

interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export default function ResumePage({ experiences, projects, skills }: { experiences: ExperienceCardProps[], projects: ExperienceCardProps[], skills: string[] }) {
  const [jobDescription, setJobDescription] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [education, setEducation] = useState<Education[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<string>('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async () => {
    
    try {
      const resumeData = {
        experience: experiences,
        projects: projects,
        skills: skills,
        education: []
      };

      setLoading(true);
      const result = await createResume(resumeData, jobDescription);
      setLoading(false);
      setGeneratedResume(result);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error generating resume:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="mx-auto p-4 bg-white h-screen w-screen">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Job Details</h2>
            <div>
              <Label className="block mb-2">Job Description</Label>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full h-48"
                placeholder="Paste the job description here..."
              />
            </div>
            <div>
              <Label className="block mb-2">Additional Context</Label>
              <Textarea
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                className="w-full h-48"
                placeholder="Add any additional context or information..."
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:max-h-[85svh] md:overflow-auto">
            <Section
              title="Work Experience"
              items={experiences}
              type='experience'
              renderItem={(exp) => (
                <ExperienceCard
                  key={exp.id}
                  title={exp.title}
                  organization={exp.organization}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  location={exp.location}
                  responsibilities={exp.responsibilities}
                />
              )}
            />

            <Section
              title="Education"
              items={education}
              type='experience'
              renderItem={(edu) => (
                <ExperienceCard
                  key={edu.id}
                  title={edu.degree}
                  organization={edu.institution}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  location={edu.location}
                  responsibilities={edu.description}
                />
              )}
            />

            <Section
              title="Projects"
              items={projects}
              type='project'
              renderItem={(proj) => (
                <ExperienceCard
                  key={proj.id}
                  title={proj.title}
                  organization={proj.organization}
                  startDate={proj.startDate}
                  endDate={proj.endDate}
                  location={proj.location}
                  responsibilities={proj.responsibilities}
                />
              )}
            />

            <SkillsSection skills={skills} />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button disabled={isLoading} onClick={handleSubmit} type="button">
            { isLoading ? "Loading..." : "Generate Resume" }
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Generated Resume</DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap">
            {generatedResume}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
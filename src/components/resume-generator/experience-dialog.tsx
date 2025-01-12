import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addExperience, addProject } from "@/app/actions/resume";
import { ExperienceCardProps } from "./experience-card";
import { Textarea } from "@/components/ui/textarea";

interface ExperienceDialogProps {
  type: "experience" | "project",
  children: React.ReactNode;
}

export function ExperienceDialog({ children, type }: ExperienceDialogProps) {
  const [form, setForm] = useState<Omit<ExperienceCardProps, "id">>({
    title: '',
    organization: '',
    startDate: '',
    endDate: '',
    location: '',
    responsibilities: '',
  });

  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (type === "experience") {
      await addExperience(form)
    } else {
      await addProject(form)
    }

    setOpen(false)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        { children }
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Experience</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <Label>Organization</Label>
            <Input
              type="text"
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <Label>Start Date</Label>
            <Input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <Label>End Date</Label>
            <Input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <Label>Location</Label>
            <Input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <Label>Responsibilities</Label>
            <Textarea
              value={form.responsibilities}
              onChange={(e) => setForm({ ...form, responsibilities: e.target.value })}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 
import { Button } from "@/components/ui/button";
import { ExperienceDialog } from "./experience-dialog";

interface SectionProps<T> {
  title: string;
  items: T[];
  type: "project" | "experience"
  renderItem: (item: T) => React.ReactNode;
}

export function Section<T>({ title, items, type, renderItem }: SectionProps<T>) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <ExperienceDialog type={type}>
          <Button>Add New</Button>
        </ExperienceDialog>
      </div>
      <div className="space-y-4">
        {items?.map(renderItem)}
      </div>
    </div>
  );
} 
export interface ExperienceCardProps {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string;
}

export function ExperienceCard({
  title,
  organization,
  startDate,
  endDate,
  location,
  responsibilities,
}: Omit<ExperienceCardProps, "id">) {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{organization}</p>
      <p className="text-sm text-gray-500">
        {startDate} - {endDate} | {location}
      </p>
      <p className="text-sm">{responsibilities}</p>
    </div>
  );
} 
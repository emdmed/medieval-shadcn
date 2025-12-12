import { LucideIcon } from "lucide-react";

interface SectionBannerProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export function SectionBanner({ title, icon: Icon, description }: SectionBannerProps) {
  return (
    <div className="mb-16 flex flex-col items-center">
      <div
        className="bg-secondary px-8 py-4"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%)",
        }}
      >
        <h2 className="flex items-center gap-4 text-4xl font-bold text-primary-foreground md:text-5xl">
          <Icon />
          {title}
          <Icon />
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-muted-foreground">- {description} -</p>
      )}
    </div>
  );
}

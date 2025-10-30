import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export default function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-4" data-testid="skill-category">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="text-lg md:text-xl font-semibold" data-testid="text-category-title">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="hover-elevate"
            data-testid={`skill-${index}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  title,
  company,
  duration,
  location,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="p-6 md:p-8 hover-elevate" data-testid="card-experience">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-2" data-testid="text-job-title">
            {title}
          </h3>
          <p className="text-lg text-foreground font-medium mb-1" data-testid="text-company">
            {company}
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-location">
            {location}
          </p>
        </div>
        <div className="text-sm font-medium text-muted-foreground font-mono" data-testid="text-duration">
          {duration}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex gap-3" data-testid={`achievement-${index}`}>
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">
              {achievement.split(/(\d+%|\d+K\+|\d+\.\d+%)/g).map((part, i) => {
                if (/(\d+%|\d+K\+|\d+\.\d+%)/.test(part)) {
                  return (
                    <span key={i} className="font-mono font-semibold text-primary">
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" data-testid={`tech-${index}`}>
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

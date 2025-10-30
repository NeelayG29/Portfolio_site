import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  degree: string;
  field: string;
  university: string;
  location: string;
  duration: string;
  gpa: string;
  courses?: string[];
}

export default function EducationCard({
  degree,
  field,
  university,
  location,
  duration,
  gpa,
  courses,
}: EducationCardProps) {
  return (
    <Card className="p-6 md:p-8 hover-elevate" data-testid="card-education">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-md">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-1" data-testid="text-degree">
            {degree}
          </h3>
          <p className="text-lg text-foreground font-medium mb-2" data-testid="text-field">
            {field}
          </p>
          <p className="text-base text-muted-foreground mb-1" data-testid="text-university">
            {university}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1" data-testid="text-location">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <span data-testid="text-duration">{duration}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">GPA</div>
          <div className="text-2xl font-mono font-bold text-primary" data-testid="text-gpa">
            {gpa}
          </div>
        </div>
      </div>

      {courses && courses.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <Badge key={index} variant="outline" data-testid={`course-${index}`}>
                {course}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

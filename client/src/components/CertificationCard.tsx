import { Card } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export default function CertificationCard({
  name,
  issuer,
  date,
  verifyUrl,
}: CertificationCardProps) {
  return (
    <Card className="p-6 md:p-8 hover-elevate" data-testid="card-certification">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
          <Award className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-2" data-testid="text-cert-name">
            {name}
          </h3>
          <p className="text-base text-foreground font-medium mb-3" data-testid="text-issuer">
            {issuer}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-date">Earned {date}</span>
          </div>
          {verifyUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid="button-verify"
            >
              <a href={verifyUrl} target="_blank" rel="noopener noreferrer">
                View Cert
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

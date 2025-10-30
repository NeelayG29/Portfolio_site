import { Card } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      <Card className="p-6 md:p-8 hover-elevate" data-testid="card-certification">
      <div className="flex items-start gap-4">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-3 bg-primary/10 rounded-md flex-shrink-0"
        >
          <Award className="w-8 h-8 text-primary" />
        </motion.div>
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
    </motion.div>
  );
}

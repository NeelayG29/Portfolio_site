import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Neelay Goswami</p>
            <p className="text-sm text-muted-foreground">
              DevOps Engineer | SRE Platform Specialist
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Toronto, ON, Canada
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Nilay808"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid="link-footer-github"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/neelaygoswami/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:nilaygoswami1499@gmail.com"
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Neelay Goswami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

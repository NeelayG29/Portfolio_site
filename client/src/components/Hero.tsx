import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Infrastructure_automation_DevOps_background_fc07c5b6.png";
import FloatingElements from "./FloatingElements";

export default function Hero() {
  const metrics = [
    { value: "99.9995%", label: "Uptime" },
    { value: "500K+", label: "Daily Active Users" },
    { value: "40%", label: "MTTR Reduction" },
    { value: "3+", label: "Years Experience" },
  ];

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      <FloatingElements />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          data-testid="text-name"
        >
          Neelay Goswami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-4"
          data-testid="text-title"
        >
          DevOps Engineer | SRE Platform Specialist
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          data-testid="text-summary"
        >
          Building and scaling cloud-native infrastructure with expertise in AWS, Azure, Kubernetes, and observability tools. 
          Passionate about creating resilient, fault-tolerant systems for mission-critical applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/Nilay808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/neelaygoswami/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:nilaygoswami1499@gmail.com"
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
          <div className="flex items-center gap-2 px-3 py-2" data-testid="text-location">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Toronto, ON, Canada</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm border border-card-border rounded-md p-6"
              data-testid={`metric-${index}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + index * 0.1 }}
                className="text-2xl md:text-3xl font-mono font-bold text-primary mb-2"
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            size="lg"
            onClick={scrollToExperience}
            data-testid="button-view-experience"
          >
            View Experience
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

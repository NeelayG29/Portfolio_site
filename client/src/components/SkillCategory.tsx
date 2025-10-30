import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export default function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
      data-testid="skill-category"
    >
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
        <h3 className="text-lg md:text-xl font-semibold" data-testid="text-category-title">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Badge
              variant="secondary"
              className="hover-elevate"
              data-testid={`skill-${index}`}
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import SkillCategory from "../SkillCategory";
import { Cloud } from "lucide-react";

export default function SkillCategoryExample() {
  return (
    <SkillCategory
      title="Cloud Platforms"
      icon={Cloud}
      skills={["AWS", "Azure", "Digital Ocean", "Google Cloud"]}
    />
  );
}

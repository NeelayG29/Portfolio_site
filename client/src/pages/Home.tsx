import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCategory from "@/components/SkillCategory";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Wrench,
  Activity,
  GitBranch,
  Shield,
  Code,
  Users,
} from "lucide-react";

export default function Home() {
  const handleDownloadResume = () => {
    window.open("/attached_assets/Neelay_Goswami_1761795548374.pdf", "_blank");
  };

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Eco-online Global",
      duration: "Jan 2024 – Present",
      location: "Canada",
      achievements: [
        "Maintained 24/7 on-call support for production systems, resolving 95% of P1 incidents within SLA and achieving 99.9995% uptime for mission-critical applications serving 500K+ daily active users.",
        "Reduced MTTR by 40% through strategic SLO/SLI implementation and Datadog monitoring, while leading incident reviews and root cause analysis to drive systemic improvements.",
        "Orchestrated migration of 5 applications from Azure to AWS, reducing annual infrastructure costs by 10% and enabling full infrastructure-as-code implementation with Terraform.",
        "Transformed monolithic VM-based application to containerized EKS architecture, reducing manual maintenance by 45% and accelerating release cycles by 30%.",
      ],
      technologies: [
        "AWS",
        "Azure",
        "EKS",
        "Terraform",
        "Datadog",
        "PagerDuty",
        "Route 53",
        "RDS",
        "OAuth 2.0",
      ],
    },
    {
      title: "Junior DevOps Engineer",
      company: "Eco-Online Global",
      duration: "Sept 2022 - Dec 2023",
      location: "Canada",
      achievements: [
        "Architected and deployed enterprise-grade Azure network infrastructure from scratch, including subnet design, security groups, Azure Firewall, Front Door, and load balancer configurations.",
        "Accelerated software delivery by 60% and reduced issue resolution time by 25% through CI/CD pipeline optimization using Octopus Deploy and Azure DevOps.",
        "Automated multi-cloud infrastructure provisioning with Terraform, enabling rapid environment deployment and configuration consistency across Azure and AWS.",
        "Developed cost optimization tool for automated cleanup of unused cloud resources, achieving 20% savings in hosting costs through intelligent resource management.",
      ],
      technologies: [
        "Azure",
        "Terraform",
        "Datadog",
        "Octopus Deploy",
        "Azure DevOps",
        "Azure Firewall",
        "Front Door",
      ],
    },
    {
      title: "DevOps Engineer Co-op",
      company: "Alcumus Group Limited",
      duration: "May 2022 – Aug 2022",
      location: "Canada",
      achievements: [
        "Built innovative ChatOps automation system integrating Microsoft Teams with Terraform and Azure VMs, enabling developers to trigger infrastructure tasks directly from chat.",
        "Reduced provisioning time by 50% through Terraform-based IaC combined with RPA using Power Automate for variable groups, environments, and Kubernetes service connections.",
        "Designed and maintained Helm charts for microservices-based MERN stack deployment on Kubernetes, enhancing modularity and scalability.",
        "Streamlined developer workflows by automating repetitive infrastructure tasks, significantly reducing manual intervention and deployment errors.",
      ],
      technologies: [
        "Terraform",
        "Power Automate",
        "Azure VMs",
        "Kubernetes",
        "Helm",
        "Microsoft Teams",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Softvan",
      duration: "May 2019 – Apr 2020",
      location: "India",
      achievements: [
        "Engineered full-stack human movement analysis platform using React and Flask, integrating real-time computer vision for fitness optimization.",
        "Deployed pretrained deep learning model detecting 18 key body points for precise joint and limb identification in real-time video analysis.",
        "Developed custom algorithm using OpenCV to calculate real-time joint angles and muscle positioning for workout form correction.",
        "Created innovative solution enabling automated movement analysis and personalized fitness recommendations through ML-powered insights.",
      ],
      technologies: ["React", "Flask", "Python", "OpenCV", "Deep Learning", "Computer Vision"],
    },
  ];

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Digital Ocean"],
    },
    {
      title: "Database & Data",
      icon: Database,
      skills: [
        "MongoDB",
        "MySQL Workbench",
        "Neo4j",
        "AWS RDS",
        "Cloud SQL",
        "IBM Cognos",
        "Redis",
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: Wrench,
      skills: ["Terraform", "Ansible"],
    },
    {
      title: "Security Tools",
      icon: Shield,
      skills: [
        "Azure Firewall",
        "Windows Application Firewall",
        "Cloudflare Zero Trust",
      ],
    },
    {
      title: "Containerization & Orchestration",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "Helm", "Lens"],
    },
    {
      title: "Monitoring & Observability",
      icon: Activity,
      skills: [
        "Datadog",
        "Prometheus",
        "Elasticsearch",
        "Kibana",
        "Logstash",
        "Beats",
        "Grafana",
        "StatusCake",
        "PagerDuty",
      ],
    },
    {
      title: "CI/CD Tools",
      icon: GitBranch,
      skills: [
        "ArgoCD",
        "Azure DevOps",
        "Octopus Deploy",
        "GitLab CI",
        "GitHub Actions",
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "HCL",
        "PowerShell",
        "SQL",
        "Bash",
      ],
    },
    {
      title: "Collaboration & Tools",
      icon: Users,
      skills: [
        "Git",
        "Jira",
        "Confluence",
        "Maven",
        "Power Automate",
        "Wireshark",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Applied Computer Science",
      field: "Computer Science",
      university: "Dalhousie University",
      location: "Halifax, Nova Scotia, Canada",
      duration: "Jan 2021 - Sept 2022",
      gpa: "4.05/4.30",
      courses: [
        "Software Development Concepts",
        "Advanced Topics in Software Development",
        "Serverless Data Processing",
        "Advanced Topics in Cloud Computing",
        "Data Management",
        "Warehousing",
        "Analytics",
        "Network Security",
        "Advanced Web",
        "Privacy & IT",
      ],
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      university: "Gujarat Technological University",
      location: "Ahmedabad, Gujarat, India",
      duration: "Aug 2016 - Aug 2020",
      gpa: "8.70/10.0",
    },
  ];

  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "Feb 2024",
      verifyUrl: "https://www.credly.com/badges/a066271c-6909-4dcf-bb3e-1d10f3a05aad/public_url",
    },
    {
      name: "Architecting on AWS",
      issuer: "Amazon Web Services (AWS)",
      date: "Nov 2023",
      verifyUrl: "https://aws.amazon.com/training/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar onDownloadResume={handleDownloadResume} />

      <Hero />

      <section id="experience" className="relative py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

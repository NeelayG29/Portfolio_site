import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCategory from "@/components/SkillCategory";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";
import Footer from "@/components/Footer";
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
        "Maintained 24/7 on-call support for production systems using PagerDuty and StatusCake, resolving 95% of P1 incidents within SLA and improving system uptime to 99.9995%.",
        "Defined and maintained SLOs/SLIs for critical services, leveraging Datadog to reduce MTTR by 40%. Led RCA and incident reviews, ensuring systemic fixes and continuous learning.",
        "Migrated 5 applications from Azure to AWS which helped saved company 10% on annual billing cost. Also, this helped terraforming the whole infrastructure.",
        "Designed and implemented end-to-end infrastructure on AWS, including domain registration, DNS configuration using Route 53, and traffic routing through Application Load Balancer (ALB).",
        "Migrated database applications from on-premises servers to Amazon RDS for SQL Server, improving performance, scalability, and operational efficiency.",
        "Migrated a monolithic VM-based application to AWS's Elastic Kubernetes Service (EKS) using Terraform. Which reduced manual maintenance time by 45% and release cycle duration by 30% through containerized deployment.",
        "Trained and mentored 6+ new team members, leading workshops on automation best practices, infrastructure-as-code, and cloud security.",
        "Deployed a multi-tier firewall solution using Azure Firewall + Cloudflare Zero Trust, improving penetration test security scores by 20%.",
        "Developed a custom platform tool enabling Dev teams to spin up new development environments and restore sanitized production clone data on demand. This solution reduced manual environment setup and data provisioning tasks by 20%.",
      ],
      technologies: [
        "AWS",
        "Azure",
        "Kubernetes",
        "EKS",
        "Terraform",
        "Datadog",
        "PagerDuty",
        "Route 53",
        "RDS",
        "OAuth 2.0",
        "SAML",
      ],
    },
    {
      title: "Junior DevOps Engineer",
      company: "Eco-Online Global",
      duration: "Sept 2022 - Dec 2023",
      location: "Canada",
      achievements: [
        "Improved Application Monitoring by Setting up & Configuring Datadog across Web-Server, SQL VM & Kubernetes Cluster.",
        "Designed and implemented a secure and scalable network infrastructure from the ground up in Azure, including subnet architecture, network security groups, routing tables, private DNS zones, Azure Firewalls, Front Door, custom DNS records, and load balancer configurations.",
        "Automated infrastructure provisioning and lifecycle management using Terraform, enabling scalability, environment consistency, and rapid deployment across multi-cloud environments (Azure & AWS).",
        "Led CI/CD pipeline design and optimization using Octopus Deploy and Azure DevOps, accelerating software delivery by 60% and reducing issue resolution time by 25% through automated testing, release orchestration, and deployment workflows.",
        "Reduced build pipeline execution time by 30% by streamlining build stages, implementing parallel tasks, and optimizing build cache.",
        "Developed internal tool to clean up unused cloud resources (e.g., orphaned storage, idle VMs), leading to 20% savings in hosting costs related to storage and CPU utilization.",
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
        "Developed a keyword-triggered CI/CD pipeline automation system integrated with Microsoft Teams, using Terraform, Power Automate, and Azure Virtual Machines. This enabled developers to launch infrastructure tasks directly from chat, streamlining workflows and reducing manual intervention.",
        "Reduced provisioning time for Variable Groups, Environments, Kubernetes service connections, and CI/CD pipelines by 50% by combining Terraform-based IaC with Robotic Process Automation (RPA) using Power Automate.",
        "Developed and maintained Helm charts to deploy a MERN stack application using a microservices-based architecture on Kubernetes, enhancing modularity, scalability, and maintainability of application components.",
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
        "Developed a full-stack application for human movement analysis using React (Frontend) and Flask (Python Backend).",
        "Integrated a pretrained deep learning model capable of detecting 18 key human body points to identify limbs and joints in real time.",
        "Utilized OpenCV for visualizing model outputs and built a custom algorithm to calculate real-time angles between joints and muscles, enabling form correction and movement analysis for workout optimization.",
      ],
      technologies: ["React", "Flask", "Python", "OpenCV", "Deep Learning"],
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
      verifyUrl: "https://www.cncf.io/certification/cka/",
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

      <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Certifications
          </h2>
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

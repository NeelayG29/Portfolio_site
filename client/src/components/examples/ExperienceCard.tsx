import ExperienceCard from "../ExperienceCard";

export default function ExperienceCardExample() {
  return (
    <ExperienceCard
      title="DevOps Engineer"
      company="Eco-online Global"
      duration="Jan 2024 – Present"
      location="Canada"
      achievements={[
        "Maintained 24/7 on-call support for production systems using PagerDuty and StatusCake, resolving 95% of P1 incidents within SLA and improving system uptime to 99.9995%.",
        "Defined and maintained SLOs/SLIs for critical services, leveraging Datadog to reduce MTTR by 40%.",
        "Migrated 5 applications from Azure to AWS which helped saved company 10% on annual billing cost.",
      ]}
      technologies={["AWS", "Azure", "Kubernetes", "Terraform", "Datadog", "PagerDuty"]}
    />
  );
}

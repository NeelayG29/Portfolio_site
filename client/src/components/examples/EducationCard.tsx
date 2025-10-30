import EducationCard from "../EducationCard";

export default function EducationCardExample() {
  return (
    <EducationCard
      degree="Master of Applied Computer Science"
      field="Computer Science"
      university="Dalhousie University"
      location="Halifax, Nova Scotia, Canada"
      duration="Jan 2021 - Sept 2022"
      gpa="4.05/4.30"
      courses={[
        "Cloud Computing",
        "Data Management",
        "Network Security",
        "Serverless Data Processing",
      ]}
    />
  );
}

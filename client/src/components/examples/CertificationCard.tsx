import CertificationCard from "../CertificationCard";

export default function CertificationCardExample() {
  return (
    <CertificationCard
      name="Certified Kubernetes Administrator (CKA)"
      issuer="The Linux Foundation"
      date="Feb 2024"
      verifyUrl="https://www.cncf.io/certification/cka/"
    />
  );
}

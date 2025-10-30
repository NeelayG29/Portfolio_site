import Navbar from "../Navbar";

export default function NavbarExample() {
  return (
    <Navbar onDownloadResume={() => console.log("Download resume clicked")} />
  );
}

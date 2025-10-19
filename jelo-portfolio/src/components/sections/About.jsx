import AboutCard from "../ui/AboutCard";
import CertificateCard from "../ui/CertificateCard";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl px-6">

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
          {/* Left Column - Personal Info */}
          <AboutCard />

          {/* Right Column - Skills & Stats */}
          <CertificateCard />
          
        </div>
      </div>
    </section>
  );
};

export default About;
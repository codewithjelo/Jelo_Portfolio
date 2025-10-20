import AboutCard from "../ui/AboutCard";
import CertificateCard from "../ui/CertificateCard";
import TechStackCard from "../ui/TechStackCard";
import LogoLoop from "../animations/LogoLoop";
import "../../styles/components/sections/about.css";
import { SiReact, SiLaravel, SiPython, SiTailwindcss } from "react-icons/si";

const About = () => {
  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiLaravel />, title: "Laravel"},
    {
      node: <SiPython />,
      title: "Python"
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
  ];

  return (
    <section id="about" className="min-h-screen min-w-screen py-20">
      <div className="max-w-7xl px-6">
        <h1 className="tagline uppercase text-center mb-10">
          “<span>Learning </span> today <span>to build a better</span> tomorrow
          ”
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[650px_1fr] gap-[2vw]">
          {/* Left Column - Personal Info */}
          <AboutCard />

          {/* Right Column - Skills & Stats */}
          <TechStackCard />

          <CertificateCard />
        </div>
        <div className="relative overflow-hidden w-full mt-20">
          <LogoLoop
            className="logo-loop"
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={48}
            gap={80}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--primary-color)"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

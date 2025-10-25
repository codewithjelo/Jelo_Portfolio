import { forwardRef } from 'react';
import { SiReact, SiLaravel, SiPython, SiTailwindcss } from "react-icons/si";
import AboutCard from "../ui/AboutCard";
import CertificateCard from "../ui/CertificateCard";
import TechStackCard from "../ui/TechStackCard";
import LogoLoop from "../animations/LogoLoop";
import "../../styles/components/sections/about.css";

const About = forwardRef((props, ref) => {
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
    <section id="about" ref={ref} className="min-h-screen min-w-screen py-20">
      <div className="max-w-7xl px-6">
        <h1 className="about-tagline uppercase text-center mt-10 mb-4">
          “<span>Learning </span> today <span>to build a better</span> tomorrow
          ”
        </h1>

        <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-16"></div>

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
            fadeOutColor="var(--transparent)"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;

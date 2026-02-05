import { forwardRef } from "react";
import { SiReact, SiLaravel, SiPython, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import AboutCard from "../ui/AboutCard";
import CertificateCard from "../ui/CertificateCard";
import TechStackCard from "../ui/TechStackCard";
import GitHubCard from "../ui/GitHubCard";
import LogoLoop from "../animations/LogoLoop";
import "../../styles/components/sections/about.css";

const About = forwardRef((props, ref) => {
  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiLaravel />, title: "Laravel" },
    {
      node: <SiPython />,
      title: "Python",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
  ];

  return (
    <section id="about" ref={ref} className="xl:min-h-screen min-w-screen">
      <div className="container max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="about-tagline uppercase text-center mt-10 mb-4">
            About<span>me</span>
          </h1>

          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-8 md:mb-16"></div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-[5vw] md:grid-cols-[400px_1fr] md:gap-3 lg:grid-cols-[550px_1fr] xl:grid-cols-[650px_1fr]">
            {/* Left Column - Personal Info */}
            <AboutCard />

            {/* Right Column - Skills & Stats */}
            <TechStackCard />
            <CertificateCard />
            <GitHubCard />
          </div>
        </motion.div>
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

About.displayName = "About";

export default About;

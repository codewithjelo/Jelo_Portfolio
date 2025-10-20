import { forwardRef } from 'react';
import GradientText from "../animations/GradientText";
import TextType from "../animations/TextType";
import Button from "../ui/Button";
import '../../styles/components/sections/hero.css'
import { Download, ChevronDown } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiTailwindcss,
  SiReact,
  SiLaravel,
} from "react-icons/si";

const Hero = forwardRef((props, ref) => {
  const handleDownload = () => {
    const confirmDownload = window.confirm(
      "Do you want to download the resume?"
    );

    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = "./src/assets/resume/Dimaano-Jann-Angelo-Resume.pdf";
      link.download = "Dimaano-Jann-Angelo-Resume.pdf"; // Name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center">
      <div className="home-container max-w-7xl px-6 py-20 flex flex-col lg:flex-row items-center gap-[10vw]">
        {/* Left: text */}
        <div className="w-full lg:w-2/5">
          <h1 className="name-text text-4xl sm:text-4xl font-extrabold leading-tight mb-4">
            Hello, I'm
            <br />
            <GradientText
              colors={[
                "#da6ee2",
                "#746ee2ff",
                "#da6ee2",
                "#746ee2ff",
                "#da6ee2",
              ]}
              animationSpeed={15}
              showBorder={false}
              className="custom-class text-6xl"
            >
              Jann Angelo
            </GradientText>
            <TextType
              className="custom-class text-2xl font-thin font-mono"
              text={["Web Developer"]}
              typingSpeed={200}
              showCursor={true}
              cursorCharacter="_"
            />
          </h1>

          <p className="desciption text-lg text-slate-100 max-w-xl mb-6">
            I build fast, accessible, and maintainable front-end applications
            using modern tools and best practices.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <Button
              className="resume-btn inline-flex items-center px-5 py-3 font-semibold rounded-lg"
              onClick={handleDownload}
            >
              <Download className="mr-2" size={18} />
              <span className="flex">Download Resume</span>
            </Button>
          </div>
        </div>

        {/* Right: image / illustration */}
        <div className="ms-[2vw] w-full lg:w-3/5 flex justify-center lg:justify-end">
          <div className="relative h-64 sm:w-96 sm:h-96 md:w-[25rem] md:h-[25rem] p-1 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#da6ee2] to-[#1E201E] filter blur-md mb-2 ms-2"></div>

            {/* floating icons (looping animation) */}
            <div className="floating-icon icon-1" title="HTML">
              <SiHtml5 className="tech-icon" />
            </div>
            <div className="floating-icon icon-2" title="CSS">
              <SiCss3 className="tech-icon" />
            </div>
            <div className="floating-icon icon-3" title="Python">
              <SiPython className="tech-icon" />
            </div>
            <div className="floating-icon icon-4" title="Laravel">
              <SiLaravel className="tech-icon" />
            </div>
            <div className="floating-icon icon-5" title="React">
              <SiReact className="tech-icon" />
            </div>
            <div className="floating-icon icon-6" title="Tailwind">
              <SiTailwindcss className="tech-icon" />
            </div>

            <div className="relative z-10 shadow-xl w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="./src/assets/images/jelo.jpg"
                alt="Jelo Image"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition cursor-pointer"
      >
        <ChevronDown className="chevron-down w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

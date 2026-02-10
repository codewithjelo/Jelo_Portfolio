import { forwardRef, useState } from "react";
import Swal from "sweetalert2";
import GradientText from "../animations/GradientText";
import TextType from "../animations/TextType";
import Button from "../ui/Button";
import profileImg from "../../assets/images/jelo.jpg";
import CVModal from "../ui/CVModal";
import "../../styles/components/sections/hero.css";
import { Download, ChevronDown, Eye } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiTailwindcss,
  SiReact,
  SiLaravel,
} from "react-icons/si";
import { motion } from "framer-motion";

const Hero = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumePath = "../../assets/resume/Dimaano-Jann-Angelo-Resume.pdf";

  const handleDownload = () => {
    Swal.fire({
      title: "Download Resume?",
      text: "Do you want to download the resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#30d662",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, download it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "./src/assets/resume/Dimaano-Jann-Angelo-Resume.pdf";
        link.download = "Dimaano-Jann-Angelo-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Swal.fire({
          title: "Downloaded!",
          text: "Your resume has been downloaded.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleViewCV = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-92 xl:min-h-screen flex flex-col pt-10 sm:pt-20 sm:items-center"
    >
      <div className="container max-w-full flex flex-col items-center xl:flex-row xl:gap-[10vw]">
        {/* Left: text */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="name-text text-2xl md:text-4xl font-extrabold leading-tight mb-4">
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
                className="custom-class text-4xl md:text-6xl"
              >
                Jann Angelo
              </GradientText>
              <TextType
                className="custom-class text-xl md:text-2xl font-thin font-mono"
                text={["Web Developer"]}
                typingSpeed={200}
                showCursor={true}
                cursorCharacter="_"
              />
            </h1>

            <p className="description max-w-xl mb-6">
              I build clean, responsive, and user-focused web interfaces. I
              specialize in turning designs into interactive experiences using
              modern web technologies, with a focus on performance and
              accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Button
                className="resume-btn inline-flex items-center px-5 py-3 font-semibold rounded-md"
                onClick={handleDownload}
              >
                <Download className="mr-2" size={18} />
                <span className="flex">Download CV</span>
              </Button>

              <Button
                className="view-cv-btn inline-flex items-center px-5 py-3 font-semibold rounded-md"
                onClick={handleViewCV}
              >
                <Eye className="mr-2" size={18} />
                <span className="flex">View CV</span>
              </Button>
            </div>
          </motion.div>

          <CVModal
            isOpen={isModalOpen}
            onClose={closeModal}
            pdfPath={resumePath}
          />

        </div>

        {/* Right: image / illustration */}
        <div className="w-full flex justify-center xl:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-50 sm:w-96 sm:h-96 md:w-[25rem] md:h-[25rem] p-1 rounded-full">
              <div className="neon absolute inset-0 rounded-full bg-gradient-to-tr from-[#da6ee2] to-[#1E201E] filter blur-md mb-2 ms-2"></div>

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

              <div className="image-container relative z-10 shadow-xl w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Jelo Image"
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </div>
          </motion.div>
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
        className="py-10 self-center cursor-pointer"
      >
        <ChevronDown className="chevron-down w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;

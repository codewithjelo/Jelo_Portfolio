import GradientText from "../animations/GradientText";
import TextType from "../animations/TextType";
import { SiHtml5, SiCss3, SiPython, SiTailwindcss, SiReact, SiLaravel } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
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
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-600 hover:text-cyan-400 transition"
            >
              Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
              React
            </span>

            <span className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
              TypeScript
            </span>

            <span className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
              Tailwind
            </span>

            <span className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
              Node
            </span>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </a>
    </section>
  );
};

export default Hero;

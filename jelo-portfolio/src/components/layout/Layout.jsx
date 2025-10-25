import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import "../../styles/components/layout/layout.css"
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Layout = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.style.transition = "background-color 1s ease";

          if (entry.isIntersecting) {
            entry.target.style.backgroundColor = "var(--primary-color)";
            

            if (entry.target === heroRef.current) {
              setIsInHero(true);
            }
          } else {
            entry.target.style.backgroundColor = "var(--background)";
            
            if (entry.target === heroRef.current) {
              setIsInHero(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {

      setShowScrollTop(window.scrollY > 300 && !isInHero);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInHero]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Hero  ref={heroRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />

      <button
        onClick={scrollToTop}
        className={`scroll-top fixed bottom-8 right-8 transition-all duration-500 ease-in-out ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="animate-bounce" size={32} />
      </button>
    </div>
  );
};

export default Layout;
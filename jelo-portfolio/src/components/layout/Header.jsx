import { useEffect, useState } from "react";
import {
  Home,
  CodeXml,
  FolderDot,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";
import GradientText from "../animations/GradientText";
import "../../styles/components/layout/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home", icon: <Home size={18} /> },
    { name: "About", href: "about", icon: <Briefcase size={18} /> },
    { name: "Projects", href: "projects", icon: <FolderDot size={18} /> },
    { name: "Contact", href: "contact", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`header-container w-full fixed top-0 left-0 right-0 backdrop-blur-sm bg-opacity-95 z-50 transition-all duration-500 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <nav className="nav-container max-w-full">
        <div className="flex items-center justify-between">
          <div className="logo-container text-2xl font-bold">
            <a href="#home">
              {
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
                  className="custom-class text-2xl"
                >
                  codewithjelo
                </GradientText>
              }
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-link hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className="flex flex-row items-center gap-2 text-[var(--text-color)] font-medium transition-all duration-300 relative group"
                >
                  {item.icon}
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text-color)] hover:text-white transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <ul className="mobile-menu md:hidden flex flex-col gap-4 mt-4 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className="flex flex-row items-center gap-2 text-[var(--text-color)] font-medium transition-all duration-300 hover:text-white"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

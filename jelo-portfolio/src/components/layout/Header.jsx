import { Home, CodeXml, FolderDot, Briefcase, Mail } from "lucide-react";
import GradientText from "../animations/GradientText";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <Briefcase size={18} /> },
    { name: "Skills", href: "#skills", icon: <CodeXml size={18} /> },
    { name: "Projects", href: "#projects", icon: <FolderDot size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <header className="header-container fixed top-0 left-0 right-0 bg-slate-900 backdrop-blur-sm bg-opacity-95 z-50">
      <nav className="nav-container max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="logo-container text-2xl font-bold">
            <a href="#home">{<GradientText
                          colors={['#da6ee2', '#746ee2ff', '#da6ee2', '#746ee2ff', '#da6ee2']}
                          animationSpeed={15}
                          showBorder={false}
                          className="custom-class text-2xl"
                        >codewithjelo</GradientText>}
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="nav-link flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex flex-row items-center gap-2 text-slate-300 font-medium transition-all duration-300 relative group"
                >
                  {item.icon}
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import {
  Home,
  CodeXml,
  FolderDot,
  User,
  Code,
  Briefcase,
  Mail,
  ExternalLink,
  Download,
  X,
} from "lucide-react";


const Header = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <Briefcase size={18} /> },
    { name: "Skills", href: "#skills",icon: <CodeXml size={18} /> },
    { name: "Projects", href: "#projects", icon: <FolderDot size={18}/> },
    { name: "Contact", href: "#contact", icon: <Mail size={18}/> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 backdrop-blur-sm bg-opacity-95 z-50 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            <a
              href="#home"
              className="hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              My Portfolio
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex flex-row items-center gap-2 text-slate-300 hover:text-cyan-400 font-medium transition-all duration-300 relative group"
                >
                  {item.icon}
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
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

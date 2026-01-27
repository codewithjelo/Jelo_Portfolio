import { Bolt } from "lucide-react";

const TechStackCard = () => {
  const techStack = [
    "React",
    "TailwindCSS",
    "Bootstrap",
    "PostgreSQL",
    "Laravel",
    "Python",
    "HTML5",
    "CSS3",
    "PHP",
    "MySQL",
    "JavaScript",
    "Node.js",
  ];

  return (
    <div className="techstack-card p-5">
      <h2 className="techstack-text text-xl lg:text-2xl flex font-bold mb-4">
        <Bolt className="about-icon mt-1 mr-2" size={24} />
        Tech Stack
      </h2>
      <div className="overflow-y-auto max-h-40 md:max-h-full md:overflow-hidden">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="techstack-pill px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;

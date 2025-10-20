import { Bolt } from 'lucide-react';

const TechStackCard = () => {
  const techStack = ["React", "Tailwind CSS", "Bootstrap", "PostgreSQL", "Laravel", "Python", "HTML5", "CSS3", "PHP", "MySQL", "JavaScript"];

  return (
    <div className="techstack-card p-5">
      <h2 className="techstack-text text-xl flex font-bold mb-4"><Bolt className="about-icon mr-2" size={24} />Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="techstack-pill px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;

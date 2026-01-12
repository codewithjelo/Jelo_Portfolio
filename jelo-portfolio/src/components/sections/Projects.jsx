import { forwardRef } from "react";
import "../../styles/components/sections/projects.css";
import parent1 from "../../assets/images/parent-1.png";
import parent2 from "../../assets/images/parent-2.png";
import principal1 from "../../assets/images/principal-1.png";
import ProjectContainer from "../ui/ProjectContainer";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Ibaan Central School Web Portal",
      description:
        "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
      technologies: ["HTML", "CSS", "Bootstrap", "Chart.js", "PHP", "MySQL"],
      images: [parent1, parent2, principal1],
      github: "https://github.com/codewithjelo/ICS_Web_Portal.git",
      demo: "",
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="xl:min-h-screen min-w-screen"
    >
      <div className="container max-w-full">
        {/* Project Header */}
        <div className="mb-12 text-center">
          <h2 className="project-tagline mt-10 mb-4 uppercase">
            Featured<span>Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-8 md:mb-16"></div>
          <p className="project-subtext max-w-2xl mx-auto">
            A collection of my recent work and personal projects that showcase
            my skills in web development.
          </p>
        </div>

        {/* Projects Container Card - Scrollable */}
        <ProjectContainer
          projects={projects}
          length={projects.length}
        />
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;

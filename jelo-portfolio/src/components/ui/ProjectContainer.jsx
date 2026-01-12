import { ExternalLink, Github, ArrowRight, FolderOpen } from "lucide-react";
import ImageCarousel from "../animations/ImageCarousel";

const ProjectContainer = ({ projects, length }) => {
  return (
    <div className="project-container p-8 md:p-12">
      {/* Container Header */}
      <div className="project-header flex items-center gap-3 mb-8 pb-6">
        <FolderOpen className="project-icon" size={24} />
        <h3 className="font-semibold text-xl lg:text-2xl">All Projects</h3>
        <span className="ml-auto">{length} Projects</span>
      </div>

      {/* Scrollable Projects Grid */}
      <div className="overflow-y-auto max-h-80 pr-4 custom-scrollbar md:max-h-[600px]">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-[var(--primary-color)] rounded-lg overflow-hidden border border-[var(--border-black)] hover:bg-[var(--secondary-color)] transition-all duration-300"
            >
              {/* Image Carousel */}
              <ImageCarousel images={project.images} title={project.title} />

              {/* Project Content */}
              <div className="p-5">
                <h4 className="project-title font-semibold mb-2 text-[var(--accent)]">
                  {project.title}
                </h4>
                <p className="max-h-[50px] overflow-y-auto md:overflow-hidden md:max-h-full project-desc text-[var(--text-color)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="project-techstack px-2 md:px-3 md:py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-link flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-color)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  
                  {!project.demo ? (
                    ""
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--text-color)] hover:text-[var(--accent)] transition-colors ml-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More in Container */}
      <div className="view-more text-center mt-8 pt-8">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg"
        >
          <span>View All on GitHub</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default ProjectContainer;

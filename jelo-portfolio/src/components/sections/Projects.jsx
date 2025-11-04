import { forwardRef } from "react";
import "../../styles/components/sections/projects.css";
import ProjectContainer from "../ui/ProjectContainer";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and detailed weather metrics.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      images: [
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with smooth animations, responsive design, and dark mode support.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Personal fitness tracking application with workout logging, progress charts, and goal setting features.",
      technologies: ["React Native", "Firebase", "Redux"],
      images: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
      ],
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen min-w-screen"
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

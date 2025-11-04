import { Briefcase } from "lucide-react";

const AboutCard = () => {
  return (
    <div className="about-card p-5 row-span-2">
      <h3 className="about-text flex text-2xl font-semibold mb-2">
        <Briefcase className="about-icon my-1 mr-2" size={24} /> About
      </h3>

      <div className="overflow-y-auto max-h-64 md:max-h-full md:overflow-hidden">
      <p className="about-desc leading-relaxed text-justify indent-8 px-4">
        I am Jann Angelo C. Dimaano, 22 years old, from Batangas City. I am a
        fresh graduate from Batangas State University and took BS Information
        Technology, Major in Business Analytics (Batch 2025). My interest in web
        development began when I entered college, starting with vanilla HTML,
        CSS, and JavaScript while building front-end projects.
      </p>
      <br />
      <br />
      <p className="about-desc leading-relaxed text-justify indent-8 px-4">
        Through university projects and freelancing experience, I have created
        front-end websites, designed user interfaces, and developed fully
        functional websites while collaborating in teams. This hands-on
        experience, combined with my academic background, has helped me grow
        into a more capable web developer.
      </p>
      </div>
    </div>
  );
};

export default AboutCard;

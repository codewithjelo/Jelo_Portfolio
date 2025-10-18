import { GraduationCap, Briefcase, Award } from "lucide-react";

const AboutCard = () => {
  return (
    <div className="about-card p-5">
      <h3 className="about-text flex text-2xl font-semibold mb-2">
        <Briefcase className="my-1 mr-2" size={24} /> About
      </h3>
      <p className="about-desc leading-relaxed text-justify indent-4">
        I am Jann Angelo C. Dimaano, 22 years old, from Batangas City. I am a
        fresh graduate of BS Information Technology, Major in Business Analytics
        (2025) from Batangas State University. My interest in web development
        began when I entered college, starting with vanilla HTML, CSS, and
        JavaScript while building front-end projects.
      </p>
      <br />
      <br />
      <p className="about-desc leading-relaxed text-justify indent-4">
        Through university projects and freelancing experience, I have created
        front-end applications, designed user interfaces, and developed fully
        functional websites while collaborating in teams. This hands-on
        experience, combined with my academic background, has helped me grow
        into a more capable web developer.
      </p>
    </div>
  );
};

export default AboutCard;

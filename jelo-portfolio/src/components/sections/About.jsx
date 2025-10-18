import AboutCard from "../ui/AboutCard";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl px-6">

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <AboutCard />

          {/* Right Column - Skills & Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default About;
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-color mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-primary-color max-w-2xl mx-auto">
            A passionate developer with a keen eye for detail and a drive for creating impactful web solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-color mb-4">
              My Journey
            </h3>
            <p className="text-primary-color leading-relaxed">
              I am a web developer based in [Your Location], specializing in building exceptional digital experiences. 
              With a strong foundation in both front-end and back-end development, I strive to create 
              efficient and user-friendly applications.
            </p>
            
            {/* Experience Cards */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-accent/20">
                <GraduationCap className="text-accent" size={24} />
                <div>
                  <h4 className="text-text-color font-medium">Education</h4>
                  <p className="text-primary-color text-sm">Your University / Course Details</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-accent/20">
                <Briefcase className="text-accent" size={24} />
                <div>
                  <h4 className="text-text-color font-medium">Work Experience</h4>
                  <p className="text-primary-color text-sm">Your Work Experience Details</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-accent/20">
                <Award className="text-accent" size={24} />
                <div>
                  <h4 className="text-text-color font-medium">Achievements</h4>
                  <p className="text-primary-color text-sm">Notable Achievements & Certifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-color mb-4">
              Skills & Expertise
            </h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-color">Frontend Development</span>
                  <span className="text-accent">90%</span>
                </div>
                <div className="h-2 bg-background rounded-full">
                  <div className="h-full w-[90%] bg-accent rounded-full"></div>
                </div>
              </div>
              {/* Add more skills following the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
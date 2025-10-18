import { GraduationCap, Briefcase, Award } from "lucide-react";

const CertificateCard = () => {
  return (
    <div className="cert-card p-5">
      <h3 className="cert-text flex text-2xl font-semibold mb-2">
        <Briefcase className="my-1 mr-2" size={24} /> About
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
  );
};

export default CertificateCard;

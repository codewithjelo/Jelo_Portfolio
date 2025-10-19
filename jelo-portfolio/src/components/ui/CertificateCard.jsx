import { Award } from "lucide-react";

const CertificateCard = () => {
  const certs = [
    { title: "React", inst: "JeloCamp" },
    { title: "TailwindCSS", inst: "JeloCamp" },
    { title: "Javascript", inst: "JeloCamp" },
    { title: "Python", inst: "JeloCamp" },
    { title: "Java", inst: "JeloCamp" },
    { title: "Laravel", inst: "JeloCamp" },
  ];

  return (
    <div className="cert-card p-5">
      <h3 className="cert-text flex text-2xl font-semibold mb-3">
        <Award className="my-1 mr-2" size={24} /> Certification
      </h3>

      {/* Vertical Timeline Line - now inside scrollable container */}
      {/* Skills Grid */}
      <div className="relative">
        <div className="snap-y flex flex-col max-h-[280px] overflow-y-auto gap-4">
          {[...certs].reverse().map((cert, index, array) => (
            <div key={index} className="snap-start mr-4">
              <div className="relative pl-10">
                {/* Node */}
                {index === 0 ? (
                  <>
                    <div className="timeline absolute left-4 top-[40px] bottom-0 bg-slate-400 h-[95px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-8 w-4 h-4"></div>
                  </>
                ) : index === certs.length - 1 ? (
                  <>
                    <div className="timeline absolute left-4 top-0 bottom-0 bg-slate-400 h-[40px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-8 w-4 h-4"></div>
                  </>
                ) : (
                  <>
                    <div className="timeline absolute left-4 top-0 bottom-0 bg-slate-400 h-[95px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-8 w-4 h-4"></div>
                  </>
                )}

                <div className="cert-list p-4">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="mt-1">{cert.inst}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;

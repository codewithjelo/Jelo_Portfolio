import { Award, Calendar } from "lucide-react";

const CertificateCard = () => {
  const certs = [
    { title: "React", inst: "JeloCamp", date: "Jan 2025", link: "https://www.w3schools.com" },
    { title: "TailwindCSS", inst: "JeloCamp", date: "Feb 2025", link: "https://www.w3schools.com" },
    { title: "Javascript", inst: "JeloCamp", date: "Mar 2025", link: "https://www.w3schools.com" },
    { title: "Python", inst: "JeloCamp", date: "Apr 2025", link: "https://www.w3schools.com" },
    { title: "Java", inst: "JeloCamp", date: "Jun 2025", link: "https://www.w3schools.com" },
    { title: "Laravel", inst: "JeloCamp", date: "Jul 2025", link: "https://www.w3schools.com" },
  ];

  return (
    <div className="cert-card p-5">
      <h3 className="cert-text flex text-2xl font-semibold mb-3">
        <Award className="about-icon my-1 mr-2" size={24} /> Certification
      </h3>

      {/* Vertical Timeline Line - now inside scrollable container */}
      {/* Skills Grid */}
      <div className="relative">
        <div className="custom-scrollbar snap-y flex flex-col max-h-[230px] overflow-y-auto gap-4">
          {[...certs].reverse().map((cert, index, array) => (
            <div key={index} className="snap-start mr-4">
              <div className="certs relative pl-10 mt-1">
                {/* Node */}
                {index === 0 ? (
                  <>
                    <div className="timeline absolute left-4 top-[45px] bottom-0 h-[95px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-11 w-4 h-4"></div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="cert-list p-4">
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="mt-1 flex">
                          <Award className="mr-1" size={14} />
                          {cert.inst}
                        </p>
                        <p className="mt-1 flex">
                          <Calendar className="mr-1" size={14} />
                          {cert.date}
                        </p>
                      </div>
                    </a>
                  </>
                ) : index === certs.length - 1 ? (
                  <>
                    <div className="timeline absolute left-4 top-0 bottom-0 h-[50px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-11 w-4 h-4"></div>
                    <div className="cert-list p-4">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="mt-1 flex">
                        <Award className="mr-1" size={14} />
                        {cert.inst}
                      </p>
                      <p className="mt-1 flex">
                        <Calendar className="mr-1" size={14} />
                        {cert.date}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="timeline absolute left-4 top-0 bottom-0 h-[120px] w-[1px]"></div>
                    <div className="node absolute left-[9px] top-11 w-4 h-4"></div>
                    <div className="cert-list p-4">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="mt-1 flex">
                        <Award className="mr-1" size={14} />
                        {cert.inst}
                      </p>
                      <p className="mt-1 flex">
                        <Calendar className="mr-1" size={14} />
                        {cert.date}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;

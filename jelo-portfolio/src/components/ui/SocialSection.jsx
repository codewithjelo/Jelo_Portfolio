import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Globe,
  MessageCircle,
} from "lucide-react";
import social from "../../assets/social.png";

const SocialSection = () => {
  const [showMap, setShowMap] = useState(false);
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="contact-card grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 p-8">
          <div className="xl:h-40 mb-5">
            <h3 className="flex items-center social-title text-xl lg:text-2xl font-semibold pb-2">
              <MessageCircle className="mr-2 text-[var(--accent)]" size={24} />
              <span>Get in Touch</span>
            </h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg">
                  <Mail className="text-[var(--accent)]" size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[var(--text-color)]">Email</p>
                  <a href="mailto:jannangelodimaano@gmail.com">
                    jannangelodimaano@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 relative"
                onMouseEnter={() => setShowMap(true)}
                onMouseLeave={() => setShowMap(false)}
              >
                <div className="p-3 rounded-lg">
                  <MapPin className="text-[var(--accent)]" size={24} />
                </div>
                <div className="relative">
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="location cursor-pointer hover:text-[var(--accent)] transition-colors">
                    Batangas City, Batangas
                  </p>

                  {showMap && (
                    <div className="absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-lg overflow-hidden border-2 border-[var(--accent)]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247488.0378237748!2d120.88975685!3d13.756331349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd05f87640c75b%3A0xf1dd21643215242!2sBatangas%20City%2C%20Batangas!5e0!3m2!1sen!2sph!4v1647000000000!5m2!1sen!2sph"
                        width="300"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Batangas City Map"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg">
                  <Phone className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:+639454210467">+63 945 421 0467</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center social-title text-xl lg:text-2xl font-semibold pb-2">
              <Globe className="mr-2 text-[var(--accent)]" size={24} />
              <span>Follow Me</span>
            </h3>
            <div>
              <div className="grid grid-cols-3 w-[150px] md:w-[160px] gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icons bg-[var(--accent)] rounded-full"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.icon className="social-icon" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex p-3 md:p-8">
          <img src={social} alt="social" />
        </div>
      </div>
    </div>
  );
};

export default SocialSection;

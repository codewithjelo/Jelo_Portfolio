import React from "react";
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
        <div className="grid grid-cols-2 lg:grid-cols-1 grid p-8">
          <div>
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

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg">
                  <MapPin className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="location">Your City, Country</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg">
                  <Phone className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
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

        <div className="p-3 md:p-8">
          <img src={social} alt="social" className="hidden lg:flex" />
        </div>
      </div>
    </div>
  );
};

export default SocialSection;

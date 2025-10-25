import React from "react";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

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
    <div className="space-y-8 animate-fade-in">
      <div className="contact-card grid grid-cols-2 gap-3 rounded-2xl">
        <div className="grid grid-cols-1 grid p-8">
          <div>
            <h3 className="social-title text-2xl font-semibold mb-6">
              Get in Touch
            </h3>

            <div>
              <div className="flex items-start gap-4 space-y-4">
                <div className="p-3 rounded-lg">
                  <Mail className="text-[var(--accent)]" size={24} />
                </div>
                <div>
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
            <h3 className="social-title text-2xl font-semibold mb-6">
              Follow Me
            </h3>
            <div className="grid grid-cols-3 w-44 gap-4">
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
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8">
          <img src="../src/assets/social.png" alt="social" />
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
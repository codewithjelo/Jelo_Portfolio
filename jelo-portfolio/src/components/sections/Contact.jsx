import React, { useState, forwardRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import "../../styles/components/sections/contact.css";

const Contact = forwardRef((props, ref) => {
  const url = {
    email: "../src/assets/email-illustration.png",
    social: "../src/assets/social.png",
  };

  const [activeSection, setActiveSection] = useState("contact-form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with your actual form handling)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <section id="contact" ref={ref} className="min-h-screen min-w-screen py-20">
      <div className="max-w-6xl mx-auto">
        {/* Contact Header */}
        <div className="mb-12 text-center">
          <h2 className="contact-tagline mb-4 uppercase">
            LET’S<span>CONNECT</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="contact-subtext max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[var(--background)] rounded-full p-2 inline-flex gap-2 border border-[var(--border-black)]">
            <button
              onClick={() => setActiveSection("contact-form")}
              className={`text-[var(--accent)] px-8 py-3 rounded-full transition-all duration-300 ${
                activeSection === "contact-form"
                  ? "bg-[var(--accent)] text-[var(--text-color)]"
                  : "hover:bg-white/10"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveSection("social")}
              className={`text-[var(--accent)] px-8 py-3 rounded-full transition-all duration-300 ${
                activeSection === "social"
                  ? "bg-[var(--accent)] text-[var(--text-color)]"
                  : "hover:bg-white/10"
              }`}
            >
              Socials
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        {activeSection === "contact-form" && (
          <div className="space-y-12 animate-fade-in">
            <div className="contact-card grid grid-cols-2 p-8">
              <div>
                <h3 className="contact-text flex text-2xl font-semibold mb-6">
                  <Mail className="contact-icon my-1 mr-2" size={24} />
                  Send me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg px-4 py-3"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg px-4 py-3"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full rounded-lg px-4 py-3"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="contact-btn w-full font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : status === "sent" ? (
                      "✓ Message Sent!"
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="p-8">
                <img src={url.email} alt="email-illustration" />
              </div>
            </div>
          </div>
        )}

        {/* Social Section */}
        {activeSection === "social" && (
          <div className="space-y-8 animate-fade-in">
            <div className="contact-card grid grid-cols-2 gap-3 rounded-2xl">
              <div className="p-8">
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
                      <a href="mailto:your.email@example.com">
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

                  <h4 className="social-title text-lg font-semibold mt-10 mb-4">
                    Follow Me
                  </h4>
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
                <img src={url.social} alt="social" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

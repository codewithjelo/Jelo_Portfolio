import React, { useState, forwardRef } from "react";
import ContactForm from "../ui/ContactForm";
import SocialSection from "../ui/SocialSection";
import "../../styles/components/sections/contact.css";

const Contact = forwardRef((props, ref) => {
  const [activeSection, setActiveSection] = useState("contact-form");

  return (
    <section id="contact" ref={ref} className="min-h-screen min-w-screen">
      <div className="container max-w-full">
        {/* Contact Header */}
        <div className="mb-12 text-center">
          <h2 className="contact-tagline mt-10 mb-4 uppercase">
            LET'S<span>CONNECT</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-8 md:mb-16"></div>
          <p className="contact-subtext max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[var(--background)] rounded-full p-2 inline-flex gap-2 border border-[var(--border-black)]">
            <button
              onClick={() => setActiveSection("contact-form")}
              className={`text-[var(--accent)] px-4 py-2 md:px-8 md:py-3 rounded-full transition-all duration-300 ${
                activeSection === "contact-form"
                  ? "bg-[var(--accent)] text-[var(--text-color)]"
                  : "hover:bg-white/10"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveSection("social")}
              className={`text-[var(--accent)] px-4 py-2 md:px-8 md:py-3 rounded-full transition-all duration-300 ${
                activeSection === "social"
                  ? "bg-[var(--accent)] text-[var(--text-color)]"
                  : "hover:bg-white/10"
              }`}
            >
              Socials
            </button>
          </div>
        </div>

        {/* Render Active Section */}
        {activeSection === "contact-form" && <ContactForm />}
        {activeSection === "social" && <SocialSection />}
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
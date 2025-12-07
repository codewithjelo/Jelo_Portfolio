import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import emailIllustration from "../../assets/email-illustration.png";

const ContactForm = () => {
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

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="contact-card place-items-center grid grid-cols-1 lg:grid-cols-2 py-8 px-8">
        <div className="p-8 min-w-[757px]">
          <h3 className="flex items-center contact-text flex text-xl lg:text-2xl font-semibold mb-6">
            <Mail className="mr-2 text-[var(--accent)]" size={24} />
            <span>Send me a Message</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
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
              <label htmlFor="email" className="block text-sm font-medium mb-2">
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
              className="contact-btn w-full font-semibold pt-6 rounded-lg flex items-center justify-center gap-2"
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

        <div className="p-3 lg:p-8 2xl:w-[500px]">
          <img
            src={emailIllustration}
            alt="email-illustration"
            className="hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

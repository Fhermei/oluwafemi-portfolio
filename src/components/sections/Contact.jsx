import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target,
        import.meta.env.VITE_PUBLIC_KEY 
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("❌ Error sending message. Please try again later.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/10 text-white text-lg px-6 py-4 rounded-lg placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all"
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/10 text-white text-lg px-6 py-4 rounded-lg placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all"
            />

            {/* Message Field */}
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/10 text-white text-lg px-6 py-4 rounded-lg placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 text-lg font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

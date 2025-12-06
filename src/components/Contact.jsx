import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mkgdgeww"; // your existing URL

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ submitting: false, success: "Message sent successfully! ✅", error: null });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ submitting: false, success: null, error: "Something went wrong. Please try again." });
      }
    } catch (err) {
      // fallback to mailto if network error
      const subject = encodeURIComponent(`Message from ${formData.name || "Portfolio Visitor"}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:k.divakar1626@gmail.com?subject=${subject}&body=${body}`;
      setStatus({ submitting: false, success: "Opened your mail client as a fallback.", error: null });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-heading heading-serif">Get In Touch</h2>
        <p className="section-subtitle">
          Open to SOC roles, penetration testing projects and interesting collaborations.
        </p>

        <div className="contact-grid">
          {/* LEFT – info card */}
          <div className="card card-padded" style={{ boxShadow: "0 18px 45px rgba(15,23,42,0.12)" }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Contact Information</h3>

            <p className="contact-label">Email</p>
            <p className="contact-value" style={{ color: "var(--accent)", fontWeight: 500 }}>
              <a href="mailto:k.divakar1626@gmail.com">k.divakar1626@gmail.com</a>
            </p>

            <p className="contact-label">Phone</p>
            <p className="contact-value">+91 934200 6729</p>

            <p className="contact-label">Location</p>
            <p className="contact-value">Chennai, Tamil Nadu, India</p>

            <p className="contact-label">Profiles</p>
            <p className="contact-value">
              <a href="https://www.linkedin.com/in/divakark2006" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", display: "block" }}>
                LinkedIn
              </a>
              <a href="https://github.com/Diva07-kd" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", display: "block" }}>
                GitHub
              </a>
              <a href="https://tryhackme.com/p/DIVAKARk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", display: "block" }}>
                TryHackMe
              </a>
            </p>
          </div>

          {/* RIGHT – form card */}
          <div className="card card-padded">
            <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="contact-form-grid" aria-describedby="contact-status">
              <div>
                <p className="contact-label">Your Name</p>
                <input className="contact-input" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <p className="contact-label">Your Email</p>
                <input className="contact-input" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <p className="contact-label">Your Message</p>
                <textarea className="contact-textarea" name="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={handleChange} required />
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <button type="submit" className="btn-primary" disabled={status.submitting}>
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              <div id="contact-status" aria-live="polite" style={{ marginTop: "0.5rem" }}>
                {status.success && <div role="status" className="alert-success">{status.success}</div>}
                {status.error && <div role="alert" className="alert-error">{status.error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

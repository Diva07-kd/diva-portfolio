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
    <section id="contact" className="section" data-aos="fade-up" data-aos-duration="800">
      <div className="section-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-heading heading-serif">Get In Touch</h2>
        <p className="section-subtitle">
          Open to SOC roles, penetration testing projects and interesting collaborations.
        </p>

        <div className="contact-grid">
          {/* LEFT – info card */}
          {/* LEFT – info card (replace the inside of the card) */}
<div className="card card-padded contact-info-card" data-aos="fade-right" data-aos-duration="700">
  <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Contact Information</h3>

  <div className="contact-info-row">
    <span className="icon" aria-hidden>
      {/* email SVG */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <path d="M5 8.5L12 13L19 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <div>
      <p className="contact-label">Email</p>
      <p className="contact-value">
        <a href="mailto:k.divakar1626@gmail.com">k.divakar1626@gmail.com</a>
      </p>
    </div>
  </div>

  <div className="contact-info-row">
    <span className="icon" aria-hidden>
      {/* phone SVG */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16.5V20a1 1 0 0 1-1 1c-9.388 0-17-7.612-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 .78c.29 1.67 1.1 3.57 2.42 5.18a11.1 11.1 0 0 0 5.18 3.05 1 1 0 0 1 .78 1v3.5a1 1 0 0 1-1 1H21z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <div>
  <p className="contact-label">Phone</p>
  <p className="contact-value">
    <span className="phone-number">+91 93420 06729</span>
  </p>
</div>

  </div>

  <div className="contact-info-row">
    <span className="icon" aria-hidden>
      {/* location SVG */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s7-4.8 7-10a7 7 0 1 0-14 0c0 5.2 7 10 7 10z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="11" r="2" fill="currentColor"/>
      </svg>
    </span>
    <div>
      <p className="contact-label">Location</p>
      <p className="contact-value">Chennai, Tamil Nadu, India</p>
    </div>
  </div>

  <div style={{ marginTop: "0.6rem" }} className="contact-profiles">
    <p className="contact-label">Profiles</p>

    <div className="profile-links">
      <a href="https://www.linkedin.com/in/divakark2006" target="_blank" rel="noopener noreferrer" className="profile-link">
        {/* LinkedIn SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
          <circle cx="8" cy="9" r="1.2" fill="currentColor"/>
          <path d="M7 17v-4.2M11 17v-3.1c0-1.35.8-2.1 1.9-2.1 1.1 0 1.9.75 1.9 2.1V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <span>LinkedIn</span>
      </a>

      <a href="https://github.com/Diva07-kd" target="_blank" rel="noopener noreferrer" className="profile-link">
        {/* GitHub SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86 0 1.35-.01 2.43-.01 2.76 0 .27.18.59.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
        <span>GitHub</span>
      </a>

      <a href="https://tryhackme.com/p/DIVAKARk" target="_blank" rel="noopener noreferrer" className="profile-link">
        {/* TryHackMe icon (simple badge) */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" fill="none"/>
          <path d="M8 12h8M8 8h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <span>TryHackMe</span>
      </a>
    </div>
  </div>

  <p className="contact-label" style={{ marginTop: "0.8rem" }}>Let's Connect</p>
  <p className="contact-value" style={{ maxWidth: "22rem" }}>
    Whether it&apos;s SOC work, offensive research or security automation ideas, I&apos;d love to hear from you through any of these channels.
  </p>
</div>


          {/* RIGHT – form card */}
          <div className="card card-padded" data-aos="fade-left" data-aos-duration="700">
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

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const FORMSPREE_URL = "https://formspree.io/f/mkgdgeww";

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const THMIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8M8 8h8" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

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
        setStatus({ submitting: false, success: "Message sent successfully! I'll get back to you soon. ✓", error: null });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ submitting: false, success: null, error: "Something went wrong. Please try again." });
      }
    } catch {
      const subject = encodeURIComponent(`Message from ${formData.name || "Portfolio Visitor"}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:k.divakar1626@gmail.com?subject=${subject}&body=${body}`;
      setStatus({ submitting: false, success: "Opened your mail client as a fallback.", error: null });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="Contact"
        title="Get In Touch"
        subtitle="Open to SOC roles, penetration testing projects and interesting collaborations."
      />

      <div className="section-inner">
        <div className="contact-grid">
          {/* Info card */}
          <div
            className="card contact-info-card"
            data-aos="fade-right"
            data-aos-duration="650"
          >
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="contact-info-row">
              <div className="contact-info-icon"><EmailIcon /></div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">
                  <a href="mailto:k.divakar1626@gmail.com">k.divakar1626@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon"><PhoneIcon /></div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91 93420 06729</p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon"><LocationIcon /></div>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-profiles-section">
              <p className="contact-label">Profiles</p>
              <div className="profile-links">
                <a
                  href="https://www.linkedin.com/in/divakark2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Diva07-kd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://tryhackme.com/p/DIVAKARk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  <THMIcon />
                  <span>TryHackMe</span>
                </a>
              </div>
            </div>

            <p className="contact-label" style={{ marginTop: "1rem" }}>Let's Connect</p>
            <p className="contact-value" style={{ fontSize: "0.88rem", color: "var(--text-muted)", maxWidth: "22rem" }}>
              Whether it&apos;s SOC work, offensive research or security automation ideas,
              I&apos;d love to hear from you through any of these channels.
            </p>
          </div>

          {/* Form card */}
          <div
            className="card contact-form-card"
            data-aos="fade-left"
            data-aos-duration="650"
          >
            <h3 className="contact-form-title">Send Me a Message</h3>

            <form
              onSubmit={handleSubmit}
              className="contact-form-grid"
              aria-describedby="contact-status"
            >
              <div className="form-field">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="form-label">Your Email</label>
                <input
                  id="contact-email"
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message" className="form-label">Your Message</label>
                <textarea
                  id="contact-message"
                  className="contact-textarea"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status.submitting}
                  aria-live="polite"
                >
                  {status.submitting ? "Sending…" : "Send Message"}
                </button>
              </div>

              <div id="contact-status" aria-live="polite">
                {status.success && (
                  <div role="status" className="alert-success">{status.success}</div>
                )}
                {status.error && (
                  <div role="alert" className="alert-error">{status.error}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

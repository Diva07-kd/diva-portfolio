import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <p className="hero-tag">Hello, I&apos;m</p>
        <h1 className="hero-name heading-serif">
          <span style={{ color: "var(--accent)" }}>Divakar K</span>
        </h1>

        {/* One-line professional role tagline (updated) */}
        <h2 className="hero-role">
          Cybersecurity Student | SOC Analyst Trainee | Security Enthusiast
        </h2>

        <p className="hero-text">
          Dedicated B.E. Computer and Communication Engineering student with a
          strong focus on cybersecurity. I enjoy working on SOC analysis,
          penetration testing and offensive security labs to understand how
          attackers think and how to defend against them.
        </p>

        <div className="hero-actions">
          <a
            className="btn-primary"
            href="/DIVAKAR K.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a href="#projects" className="btn-outline">
            View My Projects
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hero-social-row">
          {/* GitHub */}
          <a
            href="https://github.com/Diva07-kd"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
            aria-label="GitHub"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.477 2 2 6.477 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.09.682-.217.682-.482 0-.238-.009-.868-.013-1.704-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.91-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.566 4.936.36.31.68.923.68 1.86 0 1.343-.012 2.427-.012 2.756 0 .268.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                fill="none"
                stroke="#111827"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/divakark2006"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
            aria-label="LinkedIn"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2.5" fill="none" stroke="#111827" strokeWidth="1.8" />
              <circle cx="8" cy="9" r="1.2" fill="#111827" />
              <path d="M7 17v-4.2M11 17v-3.1c0-1.35.8-2.1 1.9-2.1 1.1 0 1.9.75 1.9 2.1V17" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:k.divakar1626@gmail.com" className="hero-social-circle" aria-label="Email">
            <svg className="hero-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="6.5" width="17" height="11" rx="2" fill="none" stroke="#111827" strokeWidth="1.7" />
              <path d="M5 8.5 12 13l7-4.5" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* AVATAR SIDE - subtle entrance animation */}
      <motion.div
  className="hero-avatar-wrap"
  initial={{ scale: 0.92, opacity: 0, y: 20 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.18 }}
>
        <div className="hero-avatar-frame">
          <div className="hero-avatar-inner">
            <img src="/divaimg.jpeg" alt="Divakar" className="hero-avatar-photo" />
          </div>
        </div>
        <p className="hero-avatar-caption">Security Enthusiast</p>
      </motion.div>
    </section>
  );
}

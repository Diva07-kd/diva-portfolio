import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="hero-tag">Hello, I'm</p>

        <h1 className="hero-name heading-serif">
          <span>Divakar K</span>
        </h1>

        <h2 className="hero-role">
          Cybersecurity Student | SOC Analyst Trainee | Security Enthusiast
        </h2>

        <p className="hero-text">
          Dedicated cybersecurity learner passionate about SOC monitoring,
          penetration testing and real‑world attack simulations.
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
            View Projects
          </a>
        </div>

        <div className="hero-social-row">
          <a
            href="https://github.com/Diva07-kd"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </a>

          <a
            href="https://www.linkedin.com/in/divakark2006"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          </a>

          <a
            href="mailto:k.divakar1626@gmail.com"
            className="hero-social-circle"
          >
            <svg
              className="hero-social-icon"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Email"
            >
              <path
                fill="currentColor"
                d="M4.5 5h15a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 1.5a1 1 0 0 0-1 1v.2l8.5 5.2 8.5-5.2v-.2a1 1 0 0 0-1-1h-15Zm16 3.1-8.1 5a1 1 0 0 1-1 0l-8.1-5v6.9a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9.6Z"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-avatar-frame">
          <div className="hero-avatar-inner">
            <img src="/divaimg.jpeg" className="hero-avatar-photo" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "SOC Analyst Trainee",
  "Penetration Tester",
  "Security Researcher",
  "CTF Enthusiast",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const avatarVariants = {
  hidden: { scale: 0.88, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
};

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 80;

    timerRef.current = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="hero-role">
      {displayed}
      <span className="hero-cursor" aria-hidden="true" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* LEFT – text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="hero-tag">
          Hello, I'm
        </motion.p>

        <motion.h1 variants={itemVariants} className="hero-name">
          <span className="hero-name-accent">Divakar K</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-role-wrapper">
          <TypingRole />
        </motion.div>

        <motion.p variants={itemVariants} className="hero-text">
          Dedicated cybersecurity learner passionate about SOC monitoring,
          penetration testing and real‑world attack simulations. Building skills
          daily to break and defend modern systems.
        </motion.p>

        {/* Stats row */}
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">4+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">9+</span>
            <span className="hero-stat-label">Certifications</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">Active</span>
            <span className="hero-stat-label">CTF Player</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">2025</span>
            <span className="hero-stat-label">Pentest Intern</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-actions">
          <a
            className="btn-primary"
            href="/DIVAKAR K.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume PDF"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            View Resume
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={itemVariants} className="hero-social-row">
          <a
            href="https://github.com/Diva07-kd"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
            aria-label="GitHub profile"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/divakark2006"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
            aria-label="LinkedIn profile"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="mailto:k.divakar1626@gmail.com"
            className="hero-social-circle"
            aria-label="Send email"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          <a
            href="https://tryhackme.com/p/DIVAKARk"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-circle"
            aria-label="TryHackMe profile"
          >
            <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <circle cx="12" cy="12" r="9" />
              <path d="M8 11h8M8 15h5" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT – avatar */}
      <motion.div
        className="hero-image-col"
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring" aria-hidden="true" />
          <div className="hero-avatar-frame">
            <div className="hero-avatar-inner">
              <img
                src="/divaimg.jpeg"
                alt="Divakar K — Cybersecurity Professional"
                className="hero-avatar-photo"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
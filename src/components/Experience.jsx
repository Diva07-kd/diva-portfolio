import SectionTitle from "./SectionTitle";

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const summaryCards = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Technical Focus",
    text: "Strong foundation in networking, operating systems and practical security labs covering reconnaissance, exploitation and reporting.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cybersecurity Path",
    text: "Actively building skills towards SOC Analyst and Offensive Security roles through internships, CTFs, labs and self-driven projects.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Career Goal",
    text: "To grow into a security professional who can both break and defend systems — specialising in ethical hacking, SOC operations and cyber defense.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="Resume"
        title="Experience & Education"
        subtitle="A quick snapshot of my background, hands-on experience and academic journey."
      />

      <div className="section-inner">
        {/* Download CTA */}
        <div className="resume-download-row" data-aos="fade-up" data-aos-duration="600">
          <a
            className="btn-primary"
            href="/DIVAKAR K.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume as PDF"
          >
            <DownloadIcon />
            Download Resume (PDF)
          </a>
          <span className="resume-download-note">
            Full details &amp; certifications available in the PDF
          </span>
        </div>

        {/* Summary cards */}
        <div className="resume-summary-grid">
          {summaryCards.map((c, i) => (
            <div
              key={c.title}
              className="card resume-summary-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="650"
            >
              <div className="resume-summary-icon">{c.icon}</div>
              <p className="resume-summary-title">{c.title}</p>
              <p className="resume-summary-text">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Detail: Experience + Education */}
        <div className="resume-detail-grid">
          {/* Experience */}
          <div
            className="card card-padded"
            data-aos="fade-right"
            data-aos-duration="650"
          >
            <p className="resume-summary-title" style={{ marginBottom: "1.2rem" }}>
              Experience
            </p>
            <div className="timeline-item">
              <p className="timeline-role">Penetration Testing Intern</p>
              <p className="timeline-meta">Elevate Labs · Internship · 2025</p>
              <ul className="timeline-list">
                <li>Assisted in penetration testing and security assessment of web and mobile applications.</li>
                <li>Conducted vulnerability scanning, risk analysis and reported findings with clear remediation steps.</li>
                <li>Gained hands-on experience in tools like Burp Suite, Nmap and OWASP testing methodologies.</li>
                <li>Collaborated with the security team to improve the overall application security posture.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div
            className="card card-padded"
            data-aos="fade-left"
            data-aos-duration="650"
          >
            <p className="resume-summary-title" style={{ marginBottom: "1.2rem" }}>
              Education
            </p>
            <div className="timeline-item">
              <p className="education-card-title">
                B.E. in Computer and Communication Engineering
              </p>
              <p className="education-card-sub">
                Rajalakshmi Institute of Technology, Chennai
                <br />
                3rd Year Undergraduate · 2023 – 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

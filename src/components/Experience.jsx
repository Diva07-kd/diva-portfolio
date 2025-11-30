import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        label="Resume"
        title="Experience & Education"
        subtitle="A quick snapshot of my background, hands-on experience and academic journey."
      />

      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <a
            className="btn-primary"
            href="/DIVAKAR K.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF)
          </a>
          <p className="resume-subtitle">
            Full details about my projects, certifications and extra activities are available in my
            resume.
          </p>
        </div>

        {/* top summary cards */}
        <div className="resume-grid-top">
          <div className="card card-padded">
            <p className="resume-column-title">Technical Focus</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Strong foundation in networking, operating systems and practical security labs
              covering reconnaissance, exploitation and reporting.
            </p>
          </div>

          <div className="card card-padded">
            <p className="resume-column-title">Cybersecurity Path</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Actively building skills towards SOC Analyst and Offensive Security roles through
              internships, CTFs, labs and self-driven projects.
            </p>
          </div>

          <div className="card card-padded">
            <p className="resume-column-title">Career Goal</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              To grow into a security professional who can both break and defend systems –
              specialising in ethical hacking, SOC operations and cyber defense.
            </p>
          </div>
        </div>

        {/* bottom – stacked: experience + education */}
        <div className="resume-grid-bottom">
          {/* EXPERIENCE */}
          <div className="card card-padded">
            <p className="resume-column-title">Experience</p>
            <p style={{ fontWeight: 600, marginBottom: "0.2rem" }}>
              Role: Penetration Testing Intern – Elevate Labs
            </p>
            <p
              style={{
                margin: 0,
                marginBottom: "0.6rem",
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              Internship • 2025
            </p>
            <ul
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                paddingLeft: "1.2rem",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <li>
                Assisted in penetration testing and security assessment of web and mobile
                applications.
              </li>
              <li>
                Conducted vulnerability scanning, risk analysis and reported findings with clear
                remediation steps.
              </li>
              <li>
                Gained hands-on experience in tools like Burp Suite, Nmap and OWASP testing
                methodologies.
              </li>
              <li>
                Collaborated with the security team to improve the overall application security
                posture.
              </li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div className="card card-padded">
            <p className="resume-column-title">Education</p>
            <p style={{ marginBottom: "0.4rem", fontWeight: 600 }}>
              B.E. in Computer and Communication Engineering
            </p>
            <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Rajalakshmi Institute of Technology, Chennai
              <br />
              3rd Year Undergraduate Student (2023 – 2027)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

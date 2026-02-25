import SectionTitle from "./SectionTitle";

const cyberSkills = [
  "Nmap", "Burp Suite", "Tenable Nessus", "Metasploit Framework",
  "Wireshark", "Nikto", "OWASP ZAP", "sqlmap", "Splunk",
  "WFuzz", "Gobuster", "Searchsploit", "Hydra", "Zeek",
  "Social Engineering",
];

const programmingSkills = ["Python", "Java", "MySQL"];

const socSkills = [
  "Log analysis & SIEM workflows (Splunk)",
  "Alert triage & incident response basics",
  "MITRE ATT&CK framework mapping",
  "Threat hunting fundamentals",
];

const offensiveSkills = [
  "Web app recon & enumeration",
  "Exploitation labs (SQLi, XSS, CSRF)",
  "Writing basic PoCs & automation scripts",
  "Vulnerability assessment & reporting",
];

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const SwordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
  </svg>
);

function Skills() {
  return (
    <section id="skills" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="Skills"
        title="Technical & Security Skills"
        subtitle="Core cybersecurity tools, penetration testing workflows and SOC concepts I work with daily."
      />

      <div className="section-inner">
        <div className="skills-columns">
          {/* Cybersecurity Tools */}
          <div className="card card-padded" data-aos="fade-right" data-aos-duration="650">
            <div className="skill-block-header">
              <div className="skill-block-icon"><ShieldIcon /></div>
              <p className="skill-block-title">Cybersecurity Tools</p>
            </div>
            <div className="skill-badges">
              {cyberSkills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>

          {/* Programming */}
          <div className="card card-padded" data-aos="fade-left" data-aos-duration="650">
            <div className="skill-block-header">
              <div className="skill-block-icon"><CodeIcon /></div>
              <p className="skill-block-title">Programming</p>
            </div>
            <div className="skill-badges" style={{ marginBottom: "1rem" }}>
              {programmingSkills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
            <p className="skill-prose">
              Using Python and Java for scripting, automation and security tooling,
              with MySQL for storing logs, results and lab data.
            </p>
          </div>

          {/* SOC & Blue Team */}
          <div className="card card-padded" data-aos="fade-up" data-aos-delay="80" data-aos-duration="650">
            <div className="skill-block-header">
              <div className="skill-block-icon"><EyeIcon /></div>
              <p className="skill-block-title">SOC &amp; Blue-Team Concepts</p>
            </div>
            <ul className="skill-list">
              {socSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Offensive Security */}
          <div className="card card-padded" data-aos="fade-up" data-aos-delay="160" data-aos-duration="650">
            <div className="skill-block-header">
              <div className="skill-block-icon"><SwordIcon /></div>
              <p className="skill-block-title">Offensive Security &amp; Pentesting</p>
            </div>
            <ul className="skill-list">
              {offensiveSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import SectionTitle from "./SectionTitle";

const cyberSkills = [
  { icon: "🛰️", name: "Nmap" },
  { icon: "🧪", name: "Burp Suite" },
  { icon: "📊", name: "Tenable Nessus" },
  { icon: "💣", name: "Metasploit Framework" },
  { icon: "🌐", name: "Wireshark" },
  { icon: "🎭", name: "Social Engineering" },
  { icon: "🛡️", name: "Nikto" },
  { icon: "⚙️", name: "OWASP ZAP" },
  { icon: "🧬", name: "sqlmap" },
  { icon: "📈", name: "Splunk (SIEM)" },
  { icon: "🌪️", name: "WFuzz" },
  { icon: "🧭", name: "Gobuster" },
  { icon: "🔍", name: "Searchsploit" },
  { icon: "🔐", name: "Hydra" },
  { icon: "📡", name: "Zeek" },
];

const programmingSkills = [
  { icon: "🐍", name: "Python" },
  { icon: "☕", name: "Java" },
  { icon: "🗄️", name: "MySQL" },
];

const offensiveSkills = [
  "Web app recon & enumeration",
  "Exploitation labs (SQLi, XSS)",
  "Writing basic PoCs & scripts",
];

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        label="Skills"
        title="Technical & Security Skills"
        subtitle="Core cybersecurity tools, penetration testing workflows and SOC concepts I work with."
      />

      <div className="section-inner">
        <div className="skills-columns">
          {/* CYBERSECURITY TOOLS */}
          <div className="card card-padded">
            <p className="skill-block-title">🛡️ Cybersecurity Tools</p>
            <div className="soft-skills-row">
              {cyberSkills.map((s) => (
                <span key={s.name} className="soft-skill-pill">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* PROGRAMMING */}
          <div className="card card-padded">
            <p className="skill-block-title">💻 Programming</p>
            <div className="soft-skills-row">
              {programmingSkills.map((s) => (
                <span key={s.name} className="soft-skill-pill">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.9rem" }}>
              Using Python and Java for scripting, automation and security tooling, with MySQL for
              storing logs, results and lab data.
            </p>
          </div>

          {/* SOC / BLUE TEAM */}
          <div className="card card-padded">
            <p className="skill-block-title">📟 SOC &amp; Blue-Team Concepts</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Log analysis, SIEM workflows (Splunk), alert triage, incident response basics and
              mapping detections to the MITRE ATT&amp;CK framework.
            </p>
          </div>

          {/* OFFENSIVE / PENTESTING */}
          <div className="card card-padded">
            <p className="skill-block-title">🗡️ Offensive Security &amp; Pentesting</p>
            <ul
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                paddingLeft: "1.1rem",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
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

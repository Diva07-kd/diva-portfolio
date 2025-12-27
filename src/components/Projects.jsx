import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Web Application Vulnerability Scanner",
    stack: "Python • Flask • Requests",
    desc:
      "Flask-based scanner that crawls target web apps, injects custom payloads and detects XSS, SQLi and CSRF based on OWASP Top 10.",
    tools: "Python, Requests, BeautifulSoup, OWASP Top 10 checklist, Flask",
    image: "project-websec.jpg",
    tags: ["Recon", "Web Security", "Automation"],
    link: "https://github.com/Diva07-kd/WEB-APPLICATION-VULNERABILITY-SCANNER-.git",
  },
  {
    title: "SQL Injection Playground with Detection Engine",
    stack: "Flask/PHP • SQLite • Python",
    desc:
      "Practice lab for vulnerable vs secure SQL queries with a Python detection engine that flags malicious payloads and logs attempts.",
    tools: "PHP / Flask, SQLite, Python detection tool",
    image: "project-sql.jpg",
    tags: ["SQLi", "Edu Lab", "Secure Coding"],
    link: "https://github.com/Diva07-kd/-SQL-Injection-Playground-with-Detection-Engine.git",
  },
  {
    title: "Tor Guard Node Prediction – Hackathon (2025)",
    stack: "Tor • Chutney • Python • ML",
    desc:
      "Simulated a Tor network, collected traffic features and trained an XGBoost model to study deanonymization risk and forensic use-cases.",
    tools:
      "Chutney, Tor Expert Bundle, Python, Pandas, Scikit-Learn, XGBoost, JSON, Matplotlib",
    image: "project-tor.avif",
    tags: ["Anonymity", "Traffic Analysis", "Forensics"],
    link: "https://github.com/Diva07-kd/TOR-GUARD_NODE-PREDICTOR.git",
  },
  {
    title: "Network Packet Sniffer & Visualizer",
    stack: "Python • Scapy • SQLite • Matplotlib",
    desc:
      "Captures live packets with Scapy, stores metadata in SQLite and visualises protocol mix and volume trends for anomaly spotting.",
    tools: "Python, Scapy, SQLite, Matplotlib",
    image: "project-logs.jpg",
    tags: ["Networking", "Packet Analysis", "Visualization"],
    link: "https://github.com/Diva07-kd/NETWORK-PACKET-SNIFFER.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="section" data-aos="fade-up" data-aos-duration="800">
      <SectionTitle
        label="Projects"
        title="Hands-on Security Work"
        subtitle="Penetration testing, traffic analysis and security automation projects."
      />

      <div className="section-inner">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="card" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="700">
              <div
                className="project-card-image"
                style={{
                  backgroundImage: `url(/${p.image})`,
                }}
              />
              <div className="project-card-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-stack">{p.stack}</p>
                <p className="project-desc">{p.desc}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  <strong>Tools:</strong> {p.tools}
                </p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "0.9rem" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

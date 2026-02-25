import SectionTitle from "./SectionTitle";

const projects = [
  {
    number: "01",
    category: "Offensive Security",
    title: "Web Application Vulnerability Scanner",
    stack: "Python · Flask · Requests",
    desc:
      "Flask-based scanner that crawls target web apps, injects custom payloads and detects XSS, SQLi and CSRF based on OWASP Top 10.",
    tools: "Python, Requests, BeautifulSoup, OWASP Top 10 checklist, Flask",
    tags: ["Recon", "Web Security", "Automation"],
    link: "https://github.com/Diva07-kd/WEB-APPLICATION-VULNERABILITY-SCANNER-.git",
  },
  {
    number: "02",
    category: "Edu · Secure Coding",
    title: "SQL Injection Playground with Detection Engine",
    stack: "Flask / PHP · SQLite · Python",
    desc:
      "Practice lab for vulnerable vs secure SQL queries with a Python detection engine that flags malicious payloads and logs all attempts.",
    tools: "PHP / Flask, SQLite, Python detection tool",
    tags: ["SQLi", "Edu Lab", "Secure Coding"],
    link: "https://github.com/Diva07-kd/-SQL-Injection-Playground-with-Detection-Engine.git",
  },
  {
    number: "03",
    category: "Forensics · ML",
    title: "Tor Guard Node Prediction — Hackathon 2025",
    stack: "Tor · Chutney · Python · ML",
    desc:
      "Simulated a Tor network, collected traffic features and trained an XGBoost model to study deanonymization risk and forensic use-cases.",
    tools: "Chutney, Tor Expert Bundle, Python, Pandas, Scikit-Learn, XGBoost, Matplotlib",
    tags: ["Anonymity", "Traffic Analysis", "Forensics"],
    link: "https://github.com/Diva07-kd/TOR-GUARD_NODE-PREDICTOR.git",
  },
  {
    number: "04",
    category: "Network Security",
    title: "Network Packet Sniffer & Visualizer",
    stack: "Python · Scapy · SQLite · Matplotlib",
    desc:
      "Captures live packets with Scapy, stores metadata in SQLite and visualises protocol mix and volume trends for anomaly spotting.",
    tools: "Python, Scapy, SQLite, Matplotlib",
    tags: ["Networking", "Packet Analysis", "Visualization"],
    link: "https://github.com/Diva07-kd/NETWORK-PACKET-SNIFFER.git",
  },
];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function Projects() {
  return (
    <section id="projects" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="Projects"
        title="Hands-on Security Work"
        subtitle="Penetration testing, traffic analysis and security automation projects — each built to solve a real-world security challenge."
      />

      <div className="section-inner">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="card project-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="650"
            >
              <div className="project-card-body">
                <div className="project-card-top">
                  <span className="project-category-pill">{p.category}</span>
                  <span className="project-number">{p.number}</span>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-stack">{p.stack}</p>
                <p className="project-desc">{p.desc}</p>

                <p className="project-tools">
                  <strong>Tools: </strong>{p.tools}
                </p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ fontSize: "0.8rem", padding: "0.45rem 1rem" }}
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <GitHubIcon />
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

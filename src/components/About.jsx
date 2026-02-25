import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Offensive Mindset",
    text: "Enjoy building labs, testing attack paths and learning from CTF-style exercises.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Blue-Team Focus",
    text: "Interested in log analysis, SIEM, alert triage and incident response workflows.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Cloud & Modern Stack",
    text: "Learning cloud security concepts and automation using Python and shell scripts.",
  },
];

function About() {
  return (
    <section id="about" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="About Me"
        title="Passionate About Cybersecurity"
        subtitle="I love understanding how systems break, and more importantly, how to secure them."
      />

      <div className="section-inner">
        <div className="about-grid">
          {/* Image */}
          <div
            className="about-image-wrap"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <img
              src="/hero-soc-cloud.jpg"
              alt="Security Operations Center visualization"
              className="about-image-img"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-duration="700">
            <p className="about-text">
              Dedicated and analytical B.E. Computer and Communication Engineering student with a
              strong interest in cybersecurity. I have solid knowledge of networking, Linux and
              security fundamentals, with hands-on skills in penetration testing and SOC analysis.
              I'm committed to continuous learning and applying offensive security techniques to
              identify, exploit and secure vulnerabilities, with a clear focus on building a career
              in ethical hacking and cybersecurity.
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div className="about-highlight" key={h.title}>
                  <span className="about-highlight-icon">{h.icon}</span>
                  <p className="about-highlight-title">{h.title}</p>
                  <p className="about-highlight-text">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

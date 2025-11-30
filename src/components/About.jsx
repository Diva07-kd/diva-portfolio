import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        label="About Me"
        title="Passionate About Cybersecurity"
        subtitle="I love understanding how systems break, and more importantly, how to secure them."
      />

      <div className="section-inner">
        <div className="about-grid">
          <div className="card about-image">
            <img
              src="/hero-soc-cloud.jpg"
              alt="Security Operations Center"
              className="about-image-img"
            />
          </div>

          <div>
            <p className="about-text">
              Dedicated and analytical B.E. Computer and Communication Engineering student with a
              strong interest in cybersecurity. I have solid knowledge of networking, Linux and
              security fundamentals, with hands-on skills in penetration testing and SOC analysis.
              I&apos;m committed to continuous learning and applying offensive security techniques to
              identify, exploit and secure vulnerabilities, with a clear focus on building a career
              in ethical hacking and cybersecurity.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <strong>Offensive Mindset</strong>
                <br />
                Enjoy building labs, testing attack paths and learning from capture-the-flag style
                exercises.
              </div>
              <div className="about-highlight">
                <strong>Blue-Team Focus</strong>
                <br />
                Interested in log analysis, SIEM, alert triage and incident response workflows.
              </div>
              <div className="about-highlight">
                <strong>Cloud &amp; Modern Stack</strong>
                <br />
                Learning cloud security concepts and automation using Python and scripts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

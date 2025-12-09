import SectionTitle from "./SectionTitle";

const certs = [
  {
    title: "CyberSecurity – CISCO",
    provider: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/7e683af6-8b1a-4ba0-8d8b-7766a56bdeab/public_url",
  },
  {
    title: "Web Hacking",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-e151bedc-0f3c-4e79-a9ca-48554ae804ae/",
  },
  {
    title: "CC – Certified in Cybersecurity",
    provider: "ISC2",
    link: "https://www.credly.com/badges/beab3a35-71f5-434f-b903-6629266cd2f1/public_url",
  },
  {
    title: "CCEP – Red Team Leader",
    provider: "Red Team Leaders",
    link: "https://courses.redteamleaders.com/exam-completion/25442ebb31e9cf1e",
  },
  {
    title: "AWS Security – Encryption Fundamentals",
    provider: "AWS Training & Certification",
    link: "/AWS Security – Encryption.pdf",
  },
  
  {
    title: "Job Roles in the Cloud",
    provider: "AWS Training & Certification",
    link: "/aws cloud certificate.pdf",
  },
  {
    title: "ISO/IEC 27001:2022 – Information Security Associate",
    provider: "SkillFront",
    link: "/skillfront-certificate.pdf",
  },
  {
    title: "CRPO – Certified Ransomware Protection Officer",
    provider: "EU Cyber Academy",
    link: "/CRPO-Certified-Ransomware-Protection-Officer.pdf",
  },
  {
    title: "GRC – Governance, Risk & Compliance",   // change title if needed
    provider: "SIMPLY CYBER ACADEMY",                 // pdf la irukkura institute name
    link: "/GRC_CERTIFICATE.pdf",                   // public folder file name
  },
];


function Certifications() {
  return (
    <section id="certs" className="section" data-aos="fade-up" data-aos-duration="800">
      <SectionTitle
        id="certs"
        label="Certifications"
        title="Verified Learning"
        subtitle="Industry-recognised certificates that validate my cybersecurity and cloud knowledge."
      />

      <div className="section-inner">
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="card card-padded"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="700"
            >
              <p style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{c.title}</p>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  marginBottom: "0.8rem",
                }}
              >
                {c.provider}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}
                >
                  View Credential
                </a>

                {/* show download button if it's a local file (starts with /) */}
                {c.link.startsWith("/") && (
                  <a href={c.link} download className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}>
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="card card-padded"
          style={{
            marginTop: "2rem",
            background: "linear-gradient(135deg,#e0f2fe,#dcfce7)",
          }}
          data-aos="fade-up"
          data-aos-delay={certs.length * 80}
        >
          <p style={{ fontWeight: 600, marginBottom: "0.4rem" }}>
            Professional Summary
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            I'm steadily building my cybersecurity profile through structured learning,
            labs, internships and certifications. My focus is on converting theory into
            practical, testable security setups that mirror real infrastructure and
            threats.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

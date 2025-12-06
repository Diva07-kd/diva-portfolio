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
    link: "/skillfront-certificate.pdf", // make sure name matches your public folder
  },
  {
    title: "CRPO – Certified Ransomware Protection Officer",
    provider: "EU Cyber Academy",
    link: "/CRPO-Certified-Ransomware-Protection-Officer.pdf", // NEW CERTIFICATE
  },
];

function Certifications() {
  return (
    <section className="section">
      <SectionTitle
        id="certs"
        label="Certifications"
        title="Verified Learning"
        subtitle="Industry-recognised certificates that validate my cybersecurity and cloud knowledge."
      />

      <div className="section-inner">
        <div className="certs-grid">
          {certs.map((c) => (
            <div key={c.title} className="card card-padded">
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

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}
              >
                View Credential
              </a>
            </div>
          ))}
        </div>

        <div
          className="card card-padded"
          style={{
            marginTop: "2rem",
            background: "linear-gradient(135deg,#e0f2fe,#dcfce7)",
          }}
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

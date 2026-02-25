import SectionTitle from "./SectionTitle";

const certs = [
  {
    title: "CyberSecurity",
    provider: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/7e683af6-8b1a-4ba0-8d8b-7766a56bdeab/public_url",
  },
  {
    title: "Web Hacking",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-e151bedc-0f3c-4e79-a9ca-48554ae804ae/",
  },
  {
    title: "CC — Certified in Cybersecurity",
    provider: "ISC2",
    link: "https://www.credly.com/badges/beab3a35-71f5-434f-b903-6629266cd2f1/public_url",
  },
  {
    title: "CCEP — Red Team Leader",
    provider: "Red Team Leaders",
    link: "https://courses.redteamleaders.com/exam-completion/25442ebb31e9cf1e",
  },
  {
    title: "AWS Security — Encryption Fundamentals",
    provider: "AWS Training & Certification",
    link: "/AWS Security – Encryption.pdf",
  },
  {
    title: "Job Roles in the Cloud",
    provider: "AWS Training & Certification",
    link: "/aws cloud certificate.pdf",
  },
  {
    title: "ISO/IEC 27001:2022 — Information Security Associate",
    provider: "SkillFront",
    link: "/skillfront-certificate.pdf",
  },
  {
    title: "CRPO — Certified Ransomware Protection Officer",
    provider: "EU Cyber Academy",
    link: "/CRPO-Certified-Ransomware-Protection-Officer.pdf",
  },
  {
    title: "GRC — Governance, Risk & Compliance",
    provider: "Simply Cyber Academy",
    link: "/GRC_CERTIFICATE.pdf",
  },
];

const ShieldBadgeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

function Certifications() {
  return (
    <section id="certs" className="section" data-aos="fade-up" data-aos-duration="700">
      <SectionTitle
        label="Certifications"
        title="Verified Learning"
        subtitle="Industry-recognised certificates that validate my cybersecurity and cloud knowledge."
      />

      <div className="section-inner">
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="card cert-card"
              data-aos="fade-up"
              data-aos-delay={i * 60}
              data-aos-duration="650"
            >
              <div className="cert-card-header">
                <div className="cert-icon">
                  <ShieldBadgeIcon />
                </div>
                <p className="cert-title">{c.title}</p>
              </div>

              <p className="cert-provider">{c.provider}</p>

              <div className="cert-actions">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline cert-action"
                  aria-label={`View ${c.title} certificate`}
                >
                  View Certificate
                </a>

                {c.link.startsWith("/") && (
                  <a
                    href={c.link}
                    download
                    className="btn-ghost cert-action"
                    aria-label={`Download ${c.title} certificate PDF`}
                  >
                    Save PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional summary */}
        <div
          className="cert-summary-box"
          data-aos="fade-up"
          data-aos-delay={certs.length * 60}
          data-aos-duration="650"
        >
          <p className="cert-summary-title">Professional Summary</p>
          <p className="cert-summary-text">
            I'm steadily building my cybersecurity profile through structured learning,
            labs, internships and certifications. My focus is on converting theory into
            practical, testable security setups that mirror real infrastructure and threats.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

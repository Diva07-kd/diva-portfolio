import React from "react";
import SectionTitle from "./SectionTitle";

/*
  Certifications.jsx
  - Add /public/skillfront-certificate.pdf to public folder
  - This component maps through certs and renders cards with 'View Credential'
*/

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

  // <-- NEW certificate entry (SkillFront)
  {
    title: "SkillFront — [SkillFront Certificate]",
    provider: "SkillFront",
    link: "/skillfront-certificate.pdf", // ensure this file is in /public
  },
];

function Certifications() {
  return (
    <section className="section">
      <SectionTitle
        id="certs"
        label="Certifications"
        title="Verified Learning"
        subtitle="Industry‑recognised certificates that validate my cybersecurity and cloud knowledge."
      />

      <div className="section-inner">
        <div className="certs-grid">
          {certs.map((c) => (
            <div key={c.title} className="card card-padded" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "0.2rem" }}>{c.title}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", marginBottom: "0.8rem" }}>
                  {c.provider}
                </p>
              </div>

              <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: "0.85rem", padding: "0.45rem 0.95rem" }}
                >
                  View Credential
                </a>

                {/* Display a small download link for local PDF certs */}
                {c.link.startsWith("/") && (
                  <a
                    href={c.link}
                    download
                    className="btn-outline"
                    style={{ fontSize: "0.85rem", padding: "0.45rem 0.95rem" }}
                    title="Download certificate"
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="card card-padded"
          style={{ marginTop: "1.8rem", background: "linear-gradient(135deg,#e0f2fe,#dcfce7)" }}
        >
          <p style={{ fontWeight: 600, marginBottom: "0.4rem" }}>Professional Summary</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            I&apos;m steadily building my cybersecurity profile through structured learning, labs,
            internships and certifications. My focus is on converting theory into practical,
            testable security setups that mirror real infrastructure and threats.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

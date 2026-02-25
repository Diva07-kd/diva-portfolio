function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;

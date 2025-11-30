function SectionTitle({ id, label, title, subtitle }) {
  return (
    <div id={id} className="section-inner">
      <p className="section-label">{label}</p>
      <h2 className="section-heading heading-serif">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;

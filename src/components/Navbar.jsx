function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-title">DIVAKAR K</div>

        <div className="navbar-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Resume</a>
          <a href="#contact" className="navbar-link-active">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

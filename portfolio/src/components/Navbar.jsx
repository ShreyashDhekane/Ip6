import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="navbar-title">
          <h1>Shreyash Dhekane</h1>
        </a>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a className="navbar-link" href="#introduction">Introduction</a></li>
          <li><a className="navbar-link" href="#education">Education</a></li>
          <li><a className="navbar-link" href="#skills">Skills</a></li>
          <li><a className="navbar-link" href="#projects">Projects</a></li>
          <li><a className="navbar-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { FaCode } from "react-icons/fa";
import { FaUser, FaCode as FaCodeAlt, FaProjectDiagram, FaTrophy, FaGraduationCap, FaComment, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <FaCode className="me-2" /> My Portfolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about"><FaUser className="me-1" /> About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills"><FaCodeAlt className="me-1" /> Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects"><FaProjectDiagram className="me-1" /> Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#achievements"><FaTrophy className="me-1" /> Achievements</a></li>
            <li className="nav-item"><a className="nav-link" href="#education"><FaGraduationCap className="me-1" /> Education</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="#feedback"><FaComment className="me-1" /> Feedback</a></li> */}
            <li className="nav-item"><a className="nav-link" href="#contact"><FaEnvelope className="me-1" /> Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
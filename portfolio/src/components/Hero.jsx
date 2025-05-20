import { FaEnvelope, FaProjectDiagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-5 bg-gradient-primary text-white text-center">
      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p className="lead">Passionate Web Developer & Machine Learning Enthusiast</p>
        <div className="mt-4">
          <a href="#contact" className="btn btn-light btn-lg me-2 shadow"><FaEnvelope className="me-2" />Contact Me</a>
          <a href="#projects" className="btn btn-outline-light btn-lg shadow"><FaProjectDiagram className="me-2" />View Projects</a>
        </div>
      </div>
    </section>
  );
}
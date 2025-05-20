import { FaUserCircle, FaEnvelope, FaDownload, FaUser } from "react-icons/fa";
import profilePic from "../assets/myPic.jpg"; // Adjust the path and filename

export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h2 className="display-6 fw-bold mb-4 section-title"><FaUser className="me-2" />About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="rounded-circle img-fluid"
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    border: '3px solid #673ab7'
                  }}
                />
              </div>
              <h3 className="h4 card-title fw-bold">Durga Prasad Gundeti</h3>
              <p className="card-text">A passionate web developer with a creative mind and technical skills.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="card-body p-5">
              <h3 className="h4 card-title fw-bold mb-4">My Story</h3>
              <p className="card-text">Hello! I'm a Passionate Full-Stack Developer with hands-on experience in building scalable applications using the
MERN stack and machine learning. Proficient in React, Python and SQL, with a strong focus on
problem-solving and delivering impactful solutions. </p>
              <div className="d-flex mt-4">
                <a href="#contact" className="btn btn-primary me-2"><FaEnvelope className="me-2" />Get in Touch</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
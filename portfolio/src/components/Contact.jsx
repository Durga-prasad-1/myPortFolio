import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  // Social media links (replace with your actual URLs)
  const socialLinks = {
    github: "https://github.com/Durga-prasad-1",
    linkedin: "https://www.linkedin.com/in/durga-prasad-gundeti-91206b298/",
    twitter: "https://x.com/GundetiDurga",
    instagram: "https://www.instagram.com/durga_prasad_060515/"
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4 text-center">
            <h2 className="display-4 fw-bold mb-3">
              <span className="border-bottom border-3 border-primary pb-2">
                <FaEnvelope className="me-3" />Contact Me
              </span>
            </h2>
            <p className="lead text-muted">Let's collaborate on your next project</p>
          </div>
        </div>

        <div className="row justify-content-center g-4 text-white">
          {/* Email Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-dark bg-opacity-25 border border-secondary border-opacity-25 h-100 transition-all hover-scale">
              <div className="card-body text-center p-4">
                <div className="icon-wrapper bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center mb-4 p-4 rounded-circle">
                  <FaEnvelope className="fa-2x text-primary" />
                </div>
                <h4 className="card-title fw-bold mb-3 text-white">Email</h4>
                <p className="card-text mb-4 text-white">durgagundeti@gmail.com</p>
                
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="col-lg-4 col-md-6 text-white">
            <div className="card bg-dark bg-opacity-25 border border-secondary border-opacity-25 h-100 transition-all hover-scale">
              <div className="card-body text-center p-4">
                <div className="icon-wrapper bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center mb-4 p-4 rounded-circle">
                  <FaPhone className="fa-2x text-primary" />
                </div>
                <h4 className="card-title fw-bold mb-3 text-white">Phone</h4>
                <p className="card-text mb-4 text-white">+91 9505939360</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="row mt-5 text-white">
          <div className="col-12 text-center text-white">
            <h3 className="h4 mb-4  text-white">Or find me on</h3>
            <div className="d-flex justify-content-center gap-3">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg rounded-circle social-icon"
                aria-label="GitHub"
              >
                <FaGithub className="fs-4" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg rounded-circle social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="fs-4" />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg rounded-circle social-icon"
                aria-label="Twitter"
              >
                <FaTwitter className="fs-4" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg rounded-circle social-icon"
                aria-label="Instagram"
              >
                <FaInstagram className="fs-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
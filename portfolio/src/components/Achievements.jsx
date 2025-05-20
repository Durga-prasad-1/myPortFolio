import { useEffect } from 'react';
import { FaAward, FaCodeBranch, FaCertificate, FaTrophy } from "react-icons/fa";

export default function Achievements() {
  // Initialize Bootstrap carousel when component mounts
  useEffect(() => {
    // Import Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      // Initialize carousels manually if needed
      const carousel = new window.bootstrap.Carousel(
        document.getElementById('achievementsCarousel'),
        {
          interval: 3000,
          ride: 'carousel'
        }
      );
    });
  }, []);

  return (
    <section id="achievements" className="py-5 bg-gradient-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="display-6 fw-bold mb-4"><FaTrophy className="me-2" />Achievements</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div id="achievementsCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#achievementsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Achievement 1"></button>
                <button type="button" data-bs-target="#achievementsCarousel" data-bs-slide-to="1" aria-label="Achievement 2"></button>
                
              </div>
              <div className="carousel-inner rounded shadow">
                <div className="carousel-item active">
                  <div className="bg-white bg-opacity-10 p-5 text-center">
                    <div className="display-1 mb-3 text-warning">
                      <FaAward />
                    </div>
                    <h3 className="fw-bold">Hackathon Winner</h3>
                    <p className="lead mb-0">Won first place in a national-level hackathon for developing an innovative web application.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="bg-white bg-opacity-10 p-5 text-center">
                    <div className="display-1 mb-3 text-warning">
                      <FaCodeBranch />
                    </div>
                    <h3 className="fw-bold">Open Source Contributor</h3>
                    <p className="lead mb-0">Contributed to several open-source projects, including React and Bootstrap.</p>
                  </div>
                </div>
                
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#achievementsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#achievementsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
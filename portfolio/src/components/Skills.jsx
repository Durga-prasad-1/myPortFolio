import { FaLaptopCode, FaDatabase, FaBrain, FaCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="display-6 fw-bold mb-4 section-title"><FaCode className="me-2" />Skills</h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-inline-block mb-3">
                  <FaLaptopCode className="fa-2x" />
                </div>
                <h4 className="card-title fw-bold">Web Development</h4>
                <div className="mt-3">
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">HTML5</span>
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">CSS3</span>
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">JavaScript</span>
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">React</span>
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">Redux</span>
                  <span className="badge bg-primary rounded-pill px-3 py-2 m-1">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body text-center p-4">
                <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle d-inline-block mb-3">
                  <FaDatabase className="fa-2x" />
                </div>
                <h4 className="card-title fw-bold">Backend & Database</h4>
                <div className="mt-3">
                  <span className="badge bg-success rounded-pill px-3 py-2 m-1">Node.js</span>
                  <span className="badge bg-success rounded-pill px-3 py-2 m-1">Express</span>
                  <span className="badge bg-success rounded-pill px-3 py-2 m-1">MongoDB</span>
                  <span className="badge bg-success rounded-pill px-3 py-2 m-1">MySQL</span>
                  <span className="badge bg-success rounded-pill px-3 py-2 m-1">Firebase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body text-center p-4">
                <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle d-inline-block mb-3">
                  <FaBrain className="fa-2x" />
                </div>
                <h4 className="card-title fw-bold">Machine Learning</h4>
                <div className="mt-3">
                  <span className="badge bg-info rounded-pill px-3 py-2 m-1">Python</span>
                  <span className="badge bg-info rounded-pill px-3 py-2 m-1">TensorFlow</span>
                  <span className="badge bg-info rounded-pill px-3 py-2 m-1">Scikit-Learn</span>
                  <span className="badge bg-info rounded-pill px-3 py-2 m-1">Pandas</span>
                  <span className="badge bg-info rounded-pill px-3 py-2 m-1">NumPy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
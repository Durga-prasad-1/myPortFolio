import { FaGlobe, FaTasks, FaSeedling, FaExternalLinkAlt,FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="display-6 fw-bold mb-4 section-title"><FaProjectDiagram className="me-2" />Projects</h2>
            <p className="lead">Check out some of my recent work</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <span className="bg-primary bg-opacity-10 p-2 rounded me-3">
                    <FaGlobe className="text-primary" />
                  </span>
                  <h5 className="card-title fw-bold mb-0">Thyro-Aid</h5>
                </div>
                <p className="card-text">Developed an end-to-end machine learning pipeline for thyroid disease detection using data from UCI
Machine Learning Repository.
<br />
◦ Utilized traditional ML algorithms on dataset
<br />
◦ Achieved 98% accuracy in thyroid disease prediction
<br />
◦ Built a user-friendly web interface using MongoDB, Express.js, React.js, and Node.js.</p>
                
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0">
                <a href="https://github.com/Durga-prasad-1/G63ps" target="blank" className="btn btn-primary"><FaExternalLinkAlt className="me-2" />View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <span className="bg-success bg-opacity-10 p-2 rounded me-3">
                    <FaSeedling className="text-info" />
                  </span>
                  <h5 className="card-title fw-bold mb-0">AgriConnect</h5>
                </div>
                <p className="card-text">
                    Designed and developed a multi-functional agriculture application integrating advanced machine
learning and deep learning techniques. <br />
◦ Implemented CNN-based crop disease detection from leaf images to enable early diagnosis. <br />
◦ Built a time series forecasting model for predicting crop prices, aiding in market decision-making. <br />
◦ Integrated online machine learning algorithms to adapt models with real-time data inputs. <br />
◦ Developed a crop rotation recommendation system powered by Large Language Models (LLMs) to
generate insights based on soil and crop parameters.
                </p>
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0">
                <a href="#" className="btn btn-primary"><FaExternalLinkAlt className="me-2" />View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100 custom-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <span className="bg-info bg-opacity-10 p-2 rounded me-3">
                    
                    <FaTasks className="text-success" />
                  </span>
                  <h5 className="card-title fw-bold mb-0">chatApp</h5>
                </div>
                <p className="card-text">I have developed a user-friendly and interactive chat app that makes conversations seamless and engaging</p>
                
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0">
                <a href="https://github.com/Durga-prasad-1/chatApp/tree/main" className="btn btn-primary"><FaExternalLinkAlt className="me-2" />View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
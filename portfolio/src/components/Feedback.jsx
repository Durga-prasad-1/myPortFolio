import { FaComment, FaPaperPlane } from "react-icons/fa";

export default function Feedback() {
  return (
    <section id="feedback" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="display-6 fw-bold mb-4 section-title"><FaComment className="me-2" />Feedback</h2>
            <p className="lead">Feel free to share your thoughts on my portfolio!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm custom-card">
              <div className="card-body p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="userName" placeholder="Enter your name" required />
                        <label htmlFor="userName">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="userEmail" placeholder="Enter your email" required />
                        <label htmlFor="userEmail">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="userFeedback" rows="5" style={{ height: "150px" }} placeholder="Share your thoughts..." required></textarea>
                        <label htmlFor="userFeedback">Feedback</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-5"><FaPaperPlane className="me-2" /> Submit Feedback</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
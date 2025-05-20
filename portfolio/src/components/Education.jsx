import { FaSchool, FaUniversity,FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="display-6 fw-bold mb-4 section-title"><FaGraduationCap className="me-2" />Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card border-0 shadow-sm custom-card">
              <div className="card-body p-4">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="rounded-start">Qualification</th>
                        <th scope="col">Institute</th>
                        <th scope="col">Duration</th>
                        <th scope="col" className="rounded-end">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <FaSchool className="text-primary" />
                            </span>
                            <span>10th</span>
                          </div>
                        </td>
                        <td>TS Model School</td>
                        <td>2012-2013</td>
                        <td><span className="badge bg-success">9 GPA</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <FaSchool className="text-primary" />
                            </span>
                            <span>Intermediate</span>
                          </div>
                        </td>
                        <td>Sri Chaithanya Junior College</td>
                        <td>2013-2015</td>
                        <td><span className="badge bg-success">96%</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <FaUniversity className="text-primary" />
                            </span>
                            <span>B.Tech</span>
                          </div>
                        </td>
                        <td>KMIT</td>
                        <td>2015-2019</td>
                        <td><span className="badge bg-success">8.5 CGPA</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
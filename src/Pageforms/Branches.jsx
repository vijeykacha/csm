import React from "react";
import "../assets/vendor/fontawesome-free/css/all.min.css";
import "../assets/css/sb-admin-2.min.css";
import "../assets/vendor/datatables/dataTables.bootstrap4.min.css";
// All JS
import "../assets/vendor/jquery/jquery.min";
// import "../assets/vendor/bootstrap/js/bootstrap.bundle.min";
import "../assets/vendor/jquery-easing/jquery.easing.min";
// import "../assets/js/sb-admin-2.min";
// import "../assets/vendor/chart.js/Chart.min";
// import "../assets/js/demo/chart-area-demo";
// import "../assets/js/demo/chart-pie-demo";
import Sidebar from "../pages/Sidebar";
import Header from "../pages/Header";
// import Content from "./Content";
import Footer from "../pages/Footer";

const Branches = () => {
  return (
    <div>
      <div id="page-top">
        <div id="wrapper" className="vh-100">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="container">
                  <button type="submit" className="btn btn-primary float-right">
                    Add Branch
                  </button>
                  <form>
                    <h2>Branches</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="code">Branch Code</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Code"
                            id="code"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="branch">Branch Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Branch Name"
                            id="branch"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="place">Place</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter City"
                            id="place"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="contact">Contact Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contact"
                            placeholder="Enter Contact"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="dealer">Authorised Dealer</label>
                          <input
                            type="text"
                            className="form-control"
                            id="dealer"
                            placeholder="Enter Dealership"
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;

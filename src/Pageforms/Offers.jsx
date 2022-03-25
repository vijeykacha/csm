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
import { Link } from "react-router-dom";

const Offers = () => {
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
                  {/* <button type="submit" className="btn btn-primary float-right">
                    Add Offers
                  </button> */}

                  <div className="card shadow mb-4">
                    <Link
                      to="#"
                      className="d-block card-header py-3"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseCardExample"
                    >
                      <h6 className="m-0 font-weight-bold text-primary">
                        Discounts
                      </h6>
                    </Link>

                    <div className="collapse show" id="collapseCardExample">
                      <div className="card-body">
                        Here it is the discount section where we can add
                        multiple categorised <strong>Discounts </strong>
                        on each vehicles!
                      </div>
                    </div>
                  </div>
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

export default Offers;

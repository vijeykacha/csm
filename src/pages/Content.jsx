import React from "react";
import { Link } from "react-router-dom";
import Datatable from "./Datatable";

const Content = () => {
  return (
    <div>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>

      {/* Content Row */}
      <div className="row">
        {/* Card One */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <Link to="/branches" className="text-decoration-none">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Branches
                    </div>
                    &nbsp;
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      Rajkot / Jamnagar / Junagarh / Morbi
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Card Two */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <Link to="/departments" className="text-decoration-none">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Department
                    </div>
                    &nbsp;
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      HR / Finance / Administration
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Card Three */}
        <div className="col-xl-3 col-md-6 mb-4">
          <Link to="/inventory" className="text-decoration-none">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Inventory
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          50%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50px" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card Four */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <Link to="/offers" className="text-decoration-none">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Offers
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      10
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-gift fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Table</h1>
      </div>
      <Datatable />
    </div>

    // </div>
  );
};

export default Content;

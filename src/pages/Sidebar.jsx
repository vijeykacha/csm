import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          {/* <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div> */}
          <div className="sidebar-brand-text mx-3">Savan IB Automotive</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Master</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Branches</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">All Branches:</h6>
              <Link className="collapse-item" to="/">
                Rajkot-Morbi
              </Link>
              <Link className="collapse-item" to="/">
                Jamnagar
              </Link>
              <Link className="collapse-item" to="/">
                Junagarh
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Department</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Available Departments:</h6>
              <Link className="collapse-item" to="/">
                Administration
              </Link>
              <Link className="collapse-item" to="/">
                HR
              </Link>
              <Link className="collapse-item" to="/">
                Finance
              </Link>
              <Link className="collapse-item" to="/">
                Insurance
              </Link>
              <Link className="collapse-item" to="/">
                Warehouse
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/user">
            <i className="fas fa-fw fa-user"></i>
            <span>User</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-eye"></i>
            <span>Permission</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-pen"></i>
            <span>Reports</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/"
            data-toggle="collapse"
            data-target="#collapseInventories"
            aria-expanded="true"
            aria-controls="collapseInventories"
          >
            <i className="fas fa-fw fa-info"></i>
            <span>Inventory</span>
          </Link>
          <div
            id="collapseInventories"
            className="collapse"
            aria-labelledby="headingInventories"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Available Inventories:</h6>
              <Link className="collapse-item" to="/">
                Vehicles
              </Link>
              <Link className="collapse-item" to="/">
                Miscellaneous
              </Link>
              <Link className="collapse-item" to="/">
                Warranty
              </Link>
              <Link className="collapse-item" to="/">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/offers">
            <i className="fas fa-fw fa-gift"></i>
            <span>Offers</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

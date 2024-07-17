import "./Header.css";
import React, { useState } from "react";
import imgNav from "../Img/nav-icon/img.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-center header text-center ">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary car">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src={imgNav} alt="Logo" /> {/* Use your logo image */}
          </a>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleSetActive}
            style={{ zIndex: "999" }} // Toggle active state on button click
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div
            className={`collapse navbar-collapse ${active ? "show car" : ""}`}
            id="navbarNav"
            style={{ justifyContent: "end", paddingRight: "1rem" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${active ? "active" : ""}`}
                  aria-current="page"
                  href="#"
                  onClick={handleSetActive} // Toggle active state on link click
                >
                  Find Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hospitals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Medicines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surgeries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Software for Provider
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "rgba(42, 168, 255, 1)",
                    border: "none",
                  }}
                >
                  My Bookings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

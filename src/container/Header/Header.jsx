import React from "react";
import "./Header.css";
import { useState } from "react";
import imgNav from "../Img/nav-icon/img.png";
const Header = () => {
  const [active, setActive] = useState("");
  console.log(active);
  return (
    <>
      <header className="d-flex align-items-center justify-content-center header text-center ">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-around">
          <a className="navbar-brand" href="#">
            <img src={imgNav} alt="" />
          </a>

          <div className="navbar-nav" style={{ gap: "2rem" }}>
            <a
              className={`nav-link ${active}`}
              aria-current="page"
              href=""
              onClick={() => {
                setActive("active");
              }}
            >
              Find Doctors
            </a>
            <a className="nav-link " href="#">
              Hospitals
            </a>
            <a className="nav-link" href="#">
              Medicines
            </a>
            <a className="nav-link  " href="#">
              Surgeries
            </a>
            <a className="nav-link " href="#">
              Software for Provider
            </a>
            <a className="nav-link " href="#">
              Facilities
            </a>
            <button
              type="button"
              className="btn btn-primary "
              style={{
                backgroundColor: "rgba(42, 168, 255, 1)",
                border: "none",
              }}
            >
              My Bookings
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

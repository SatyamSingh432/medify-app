import React from "react";
import "./SearchHospital.css";
import { FaSearch } from "react-icons/fa";

const SearchHospital = () => {
  return (
    <div className="search-hospital-container">
      <div className="search-bar">
        <input type="text" placeholder="State" className="search-input" />
        <input type="text" placeholder="City" className="search-input" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchHospital;

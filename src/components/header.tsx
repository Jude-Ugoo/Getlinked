import React from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <nav className="header-container">
      <h1 className="header-logo">
        get<span>linked</span>
      </h1>

      <div className="header-right">
        <ul className="header-options">
          <li className="header-option">Timeline</li>
          <li className="header-option">Overview</li>
          <li className="header-option">FAQs</li>
          <li className="header-option">Contact</li>
        </ul>

        <button className="header-registration-button">Register</button>
      </div>
    </nav>
  );
};
export default Header;

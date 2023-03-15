import React from "react";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Currency Roll</h2>
        <p>The best way to buy currencies</p>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

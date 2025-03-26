import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>Online Mobile Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Panel</Link></li>
      </ul>
    </nav>
  );
};

export default Header;

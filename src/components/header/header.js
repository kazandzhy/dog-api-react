import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header row">
      <div className="logo text-dark">FindTheBestDog</div>
      <Link to="/">
        <div className="breeds-link">Breeds</div>
      </Link>
      <Link to="/random-breed">
        <div className="random-breed-link">RandomBreed</div>
      </Link>
      <hr />
    </header>
  );
};

export default Header;

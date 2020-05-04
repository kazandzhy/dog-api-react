import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header row">
      <div className="logo text-dark">FindTheBestDog</div>
      <Link to="/">
        <div className="breeds-link text-dark">Breeds</div>
      </Link>
      <Link to="/random-breed">
        <div className="random-breed-link text-dark">RandomBreed</div>
      </Link>
    </header>
  );
};

export default Header;

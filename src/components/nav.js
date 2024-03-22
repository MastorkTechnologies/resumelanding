import React from "react";
import { Link } from "react-router-dom";
import "../styleSheet/Nav.css";
import img1 from "../images/3.png";
import img2 from "../images/25.png";
import img3 from "../images/26.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary myNav">
        <div className="container">
          <Link className="navbar-brand mb-0 navText" to="/">
            <img src={img3} className="logoImg" alt="Logo" />
            <strong onClick={redirectHome}>RESUME SHAPER</strong>
          </Link>
          <div className="navButtons">
            <div onClick={() => navigate("/solutions")}>Solutions</div>
            <div onClick={() => navigate("/how-it-works")}>How It Works</div>
            <div onClick={() => navigate("/features")}>Features</div>
            <div onClick={() => navigate("/reviews")}>Reviews</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

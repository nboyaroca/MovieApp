import React from "react";
import image from "../../images/filmroll-o.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section>
      <div className="navbar">
        <div className="logo-container-left">
          <img className="logo-image-left" src={image} alt=""/>
        </div>

        <Link to="/">
          <div className="main-text">
            faV Movie
          </div>
        </Link>
        
        <div className="logo-container-right">
          <img className="logo-image-right" src={image} alt=""/>
        </div>

      </div>
    </section>
  );
}

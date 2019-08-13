import React from "react";
import "./style.css";

function NavBar(props) {
 return (
    <nav>
    <div className="navbar-fixed grey darken-3 z-depth-5">
      <a href="#" className="brand-logo">CITY OF PAWNEE</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li></li>
        <li>Score: {props.score}</li> 
        <li> | </li>
        <li>Top Score: {props.topScore} </li>
        <li></li>
      </ul>
    </div>
  </nav>
 );
}

export default NavBar;
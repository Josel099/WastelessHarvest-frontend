import React, { useState } from "react";
import "./navbarFoodList.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>W</span>asteless
            <span>H</span>arvest
          </h2>
        </div>

          <div className="buttons ">
            <ul className="buttons-ul" >
              <li>
                <button className="button1" ><NavLink to="/donation"> Donate Food </NavLink></button>
              </li>
            </ul>
            <div />
          </div>
      </nav>
    
    </>
  );
};

export default Navbar;
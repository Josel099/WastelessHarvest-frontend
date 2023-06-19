import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
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

        {/* 2nd menu part  */}

        <div
          className={
             "menu-link"
          }>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* sign up and register */}
          <div className="buttons ">
            <ul className="buttons-ul" >
              <li>
                <button className="button1" ><NavLink to="/signin">Sign In</NavLink></button>
              </li>
              <li>
                <button className="button2" ><NavLink to="/signup">Sign Up</NavLink></button>
              </li>
            </ul>
            <div />

      
           
          </div>
      </nav>
    
    </>
  );
};

export default Navbar;
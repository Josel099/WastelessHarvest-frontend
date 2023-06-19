import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className={styles.mainnav}>
        {/* 1st logo part  */}
        <div className={styles.logo}>
          <h2>
            <span>W</span>asteless
            <span>H</span>arvest
          </h2>
        </div>

        {/* 2nd menu part  */}

        <div className={styles.menulink}>
          <ul>
            <li>
              <NavLink className={styles.switch} to="/">Home</NavLink>
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
        <div className={styles.mainbuttons}>
          <ul className={styles.buttonsul}>
            <li>
              <button className={styles.button1}>
                <NavLink to="/signin">Sign In</NavLink>
              </button>
            </li>
            <li>
              <button className={styles.button2}>
                <NavLink to="/signup">Sign Up</NavLink>
              </button>
            </li>
          </ul>
          <div />
        </div>

        {/* <div>
          <h2><BiMenuAltRight/></h2>

          </div> */}
      </nav>
    </>
  );
};

export default Navbar;

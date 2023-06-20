import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({isSignedIn}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
console.log(isSignedIn);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {isSignedIn ? 
       (<div className={styles.GiHamburgerMenu} >
            <GiHamburgerMenu onClick={toggleMenu}/>
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <ul>
              <li >
                <NavLink  to="/">Donate</NavLink>
              </li>
              <li>
                <NavLink to="/about">My List</NavLink>
              </li>
              <li>
                <NavLink to="/homeList">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Settings</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>):(  
        /* sign up and register */
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
        </div>)}
        
     


      </nav>
    </>
  );
};

export default Navbar;

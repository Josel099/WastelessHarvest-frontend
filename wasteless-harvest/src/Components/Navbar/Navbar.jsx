import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({ isSignedIn, setIsMyList }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);// for togglemenu showing and closing when clicking 
  
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
        
        {/* conditions for showing buttons or toggle bar ? */}
        
      {isSignedIn ? 
       (<div className={styles.GiHamburgerMenu} >
            <GiHamburgerMenu onClick={toggleMenu}/>
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <ul>
              <li >
                <NavLink  to="/donation">Donate</NavLink>
              </li>
              <li>
                <NavLink  onClick={() => setIsMyList(true)} to="/mylist" >My List</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsMyList(false)} to="/mylist" >Home List</NavLink>
              </li>
              <li>
                <NavLink to="/">Settings</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>):(  
        /* sign up and register */
         <div className={styles.mainbuttons}>
          <ul >
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

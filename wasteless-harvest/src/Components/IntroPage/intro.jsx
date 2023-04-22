import React from "react";
import "./intro.css";
import "./image1.jpg";

function intro() {
  return (
    <div className="container-intro">
      <h1 className="title-name">WasteLess Harvest</h1>
      <div className="container2-intro">
        <div className="tagline-container">
          <h2 className="tagline-1">Your food waste can be someone's meal</h2>
          <h3 className="tagline-2">Join us and make it happen</h3>
        </div>
        <div className="intro-buttons">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default intro;

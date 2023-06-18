import React from "react";
import Navbar from "../navbarFoddList/NavbarFoodList";
import "./foodList.css";
function foodList() {
  return (
    <div>
      <Navbar />
      <div className="main-body">
        <div className="card" key={"foodItem.foodId"}>
          <div className="card-body">
            <h2 className="card-header">{"Rice and currys "}</h2>
          </div>
          <div className="card-body">

            
            <h5 className="card-title">Quantity:{"foodItem.foodQuantity"}</h5>
            <p className="card-text">Type : {"foodItem.foodType"}</p>
            <p className="card-text">Location : {"foodItem.pickupLocation"}</p>
            <p className="card-text">expiryDate : {"foodItem.expiryDate"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default foodList;

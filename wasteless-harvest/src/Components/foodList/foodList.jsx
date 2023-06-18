import React ,{useState,useEffect}from "react";
import Navbar from "../navbarFoddList/NavbarFoodList";
import axios from "axios";
import "./foodList.css";
function FoodList() {


  const [foodArray,setFoodArray] =useState([]);

  useEffect(()=>{
     getFoodItem();
    },[]);

    function getFoodItem(){
      axios.get("http://localhost:8085/api/v1/foodItem/getFood").then(res=>{setFoodArray(res.data);
      console.log(foodArray)})
      .catch(e => console.log(e));
    }
  return (
    <div>
      
<Navbar />
      <div className="main-body">
        <div className="cardbody-outer">
      {foodArray.map((foodItem) =>(
        <div className="card" key={foodItem.foodId}>
          <div className="card-body">
            <h2 className="card-header">{foodItem.foodName}</h2>
          </div>
          
          <div className="card-body">
            <div className="card-body-content">
          <p className="card-text">Type : {foodItem.foodType}</p>
            <h5 className="card-title">Quantity :{foodItem.foodQuantity}</h5>
           
            <p className="card-text">Pick-Up Location : {foodItem.pickupLocation}</p>
            <p className="card-text">Contact No : {foodItem.contactNo}</p>
            <p className="card-text">Expiry Date : {foodItem.expiryDate}</p>
            </div>
            </div>
        </div>
         ))}
         </div>
      </div>
    </div>
  );
}

export default FoodList;

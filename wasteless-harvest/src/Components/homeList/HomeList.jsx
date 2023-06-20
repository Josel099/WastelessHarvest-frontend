import React ,{useState,useEffect}from "react";
import axios from "axios";
 import styles from "../home/home.module.css";
function HomeList() {


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
      
      <div className={styles.mainbody}>
        <div className={styles.cardbodyouter}>
      {foodArray.map((foodItem) =>(
        <div className={styles.card} key={foodItem.foodId}>
          <div className={styles.cardbody}>
            <h2 className={styles.cardheader}>{foodItem.foodName}</h2>
          </div>
          
          <div className={styles.cardbody}>
            <div className={styles.cardbodycontent}>
          <p className={styles.cardtext}>Type : {foodItem.foodType}</p>
          <h5 className={styles.cardtitle}>Quantity :{foodItem.foodQuantity}</h5>
           
            <p className={styles.cardtext}>Pick-Up Location : {foodItem.pickupLocation}</p>
            <p className={styles.cardtext}>Contact No : {foodItem.contactNo}</p>
            <p className={styles.cardtext}>Expiry Date : {foodItem.expiryDate}</p>
            </div>
            </div>
        </div>
         ))}
         </div>
      </div>
    </div>
  );
}

export default HomeList;

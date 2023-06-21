import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./myList.module.css";
import {MdDeleteOutline} from 'react-icons/md'
function Mylist() {
  const customerId = localStorage.getItem("customerId");
  const [foodArray, setFoodArray] = useState([]);

  useEffect(() => {
    getFoodItem();
  }, []);




  function getFoodItem() {
    axios
      .get(`http://localhost:8085/api/v1/foodItem/getMyList/${customerId}`)
      .then((res) => {
        setFoodArray(res.data);
        console.log(foodArray);
      })
      .catch((e) => console.log(e));
  }

function deleteFoodItem(foodId){
axios.delete(`http://localhost:8085/api/v1/foodItem/deleteFoodItem/${foodId}`)
.catch((e)=>console.log(e))
}

  return (
    <div>
      <div className={styles.mainbody}>
        <div className={styles.cardbodyouter}>
          {foodArray.map((foodItem) => (
            <div className={styles.card} key={foodItem.foodId}>
              <div className={styles.cardbody}>
                <h2 className={styles.cardheader}>{foodItem.foodName}</h2>
              </div>

              <div className={styles.cardbody}>
                <div className={styles.cardbodycontent}>
                  <p className={styles.cardtext}>Type : {foodItem.foodType}</p>
                  <h5 className={styles.cardtitle}>
                    Quantity :{foodItem.foodQuantity}
                  </h5>
                  <p className={styles.cardtext}>
                    Pick-Up Location : {foodItem.pickupLocation}
                  </p>
                  <p className={styles.cardtext}>
                    Contact No : {foodItem.contactNo}
                  </p>
                  <p className={styles.cardtext}>
                    Expiry Date : {foodItem.expiryDate}
                  </p>
                </div>
               <div>  <button onClick={() => deleteFoodItem(foodItem.foodId)}> <MdDeleteOutline/> </button> </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mylist;

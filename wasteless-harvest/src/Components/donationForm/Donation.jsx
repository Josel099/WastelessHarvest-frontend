import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "./donation.css"

function Donation() {

    const [formData, setFormData] = useState({
        foodName: '',
        foodType: '',
        foodQuantity: '',
        pickUpLocation: '',
        contactNo: '',
        expiryDate: ''
      });
      const navigate = useNavigate();

      const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
      };


    const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.foodName || !formData.foodQuantity || !formData.pickUpLocation || !formData.contactNo ) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:8085/api/v1/foodItem/donateFood", {
        foodName: formData.foodName,
        foodType: formData.foodType,
        foodQuantity: formData.foodQuantity,
        pickupLocation:formData.pickUpLocation,
        contactNo: formData.contactNo,
        expiryDate: formData.expiryDate,
      });
      //alert("Registation Successfully");
      navigate("/foodList");
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  }





  return (
    <div className='maintip'>
    <div className='main-body'>

    <div className='headingdonation'>
    <h1> Donate </h1>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='sub-part'>
        <label>Food Name</label>
        <input
         type='text' 
        value={formData.foodName}
        onChange={(e) => handleChange('foodName', e.target.value)}
        />
    </div>
    <div className='sub-part'>
        <label>Food Type</label>
        <input type='text' 
        value={formData.foodType}
        onChange={(e) => handleChange('foodType', e.target.value)} />
    </div>
    <div className='sub-part'>
        <label>Food Quantity</label>
        <input type='text' 
        value={formData.foodQuantity}
        onChange={(e) => handleChange('foodQuantity', e.target.value)}
        />
    </div>
    <div className='sub-part'>
        <label>Pick-Up Location</label>
        <input type='text'
        value={formData.pickUpLocation}
        onChange={(e) => handleChange('pickUpLocation', e.target.value)}
          />
    </div >
    <div className='sub-part'>
        <label>Contact No </label>
        <input type='tel' 
         value={formData.contactNo}
         onChange={(e) => handleChange('contactNo', e.target.value)}
         />
    </div>
    <div className='sub-part'>
        <label>Expiry Date</label>
        <input type='date' 
         value={formData.expiryDate}
         onChange={(e) => handleChange('expiryDate', e.target.value)} />
    </div>
    <div>
        <button type='submit'monClick={handleSubmit}> Donate Item</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Donation
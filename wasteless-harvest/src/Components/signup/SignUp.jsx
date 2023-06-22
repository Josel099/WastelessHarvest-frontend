import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import styles from"./signup.module.css"
const SignUp = ({ isSettings }) => {

  const customerId = localStorage.getItem("customerId");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone1: '',
    phone2: '',
    address: '',
    pin: '',
    organization: '',
  });
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {//for getting customer data to the input field
    if (isSettings) {
      getInfo();
    }
  }, [isSettings]);
  
 
  const getInfo = async () => {//arrow function for getting customer data to the input field
    try {
      const response = await axios.get(`http://localhost:8085/api/v1/customer/getCustomer/${customerId}`);
      const responseData = response.data;
      const updatedFormData = {
        ...formData,
        name: responseData.customerName,
        phone1: responseData.phoneNo1,
        phone2: responseData.phoneNo2,
        address :responseData.address,
        pin: responseData.pinNo,
        organization: responseData.organizationName,
      };
      setFormData(updatedFormData);
    } catch (error) {
      console.log(error);
    }
  };
  



//for signup 
   const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.phone1 ) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:8085/api/v1/customer/save", {
        customerName: formData.name,
        email: formData.email,
        phoneNo1: formData.phone1,
        phoneNo2:formData.phone2,
        address: formData.address,
        pinNo: formData.pin,
        organizationName: formData.organization,
        password: formData.password
      });
      //alert("Registation Successfully");
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  }
 

return (
  <div>
  <div className={styles.registrationform}>
  
  <div className={styles.registrationform1}>
  <h1>{isSettings ? 'Your Account':'SignUp'}</h1>
    <form  onSubmit={handleSubmit}>
      <div className={styles.formfield}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      {isSettings ? (
                null
                  ) :  <div className={styles.formfield}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>}
                 
      <div className={styles.formfield}>
        <label htmlFor="phone1">Phone Number 1</label>
        <input
          type="tel"
          id="phone1"
          name="phone1"
          value={formData.phone1}
          onChange={(e) => handleChange('phone1', e.target.value)}
        />
      </div>
      <div className={styles.formfield}>
        <label htmlFor="phone2">Phone Number 2</label>
        <input
          type="tel"
          id="phone2"
          name="phone2"
          value={formData.phone2}
          onChange={(e) => handleChange('phone2', e.target.value)}
        />
      </div>
      <div className={styles.formfield}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
        />
      </div>
      <div className={styles.formfield}>
        <label htmlFor="pin">PIN Number</label>
        <input
          type="text"
          id="pin"
          name="pin"
          value={formData.pin}
          onChange={(e) => handleChange('pin', e.target.value)}
        />
      </div>

      <div className={styles.formfield}>
        <label htmlFor="organization">Organization Name</label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={(e) => handleChange('organization', e.target.value)}
        />
      </div>

      <div className={styles.formfield}>
        <label htmlFor="password">{isSettings ? 'New' : null} Password</label>
        <input
        placeholder='password'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>



      <button className={styles.buttonregister}type="submit" >{isSettings ? 'Update Account':'SignUp'}</button>
    </form>
    </div>
  </div>
  </div>
);
}
export default SignUp;

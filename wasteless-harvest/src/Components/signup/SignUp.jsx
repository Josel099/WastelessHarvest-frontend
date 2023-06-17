import React, { useState } from 'react';
import axios from "axios";
import "./signup.css"
import { useNavigate } from "react-router-dom";
const SignUp = () => {


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

  // if (!formData.name || !email || !password) {
  //   alert("Please fill in all fields");
  //   return;
  // }


   const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8085/api/v1/customer/save", {
        customerName: formData.name,
        email: formData.email,
        phoneNo1: formData.phone1,
        phoneNo2: formData.phone2,
        address: formData.address,
        pinNo: formData.pin,
        organizationName: formData.organization,
        password: formData.password
      });
      alert("Registation Successfully");
      navigate("/signup");
    } catch (err) {
      alert(err);
    }
    console.log(formData);
  }
 

return (
  <div className="registration-form">
    <h1>Registration Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone1">Phone Number 1</label>
        <input
          type="tel"
          id="phone1"
          name="phone1"
          value={formData.phone1}
          onChange={(e) => handleChange('phone1', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone2">Phone Number 2</label>
        <input
          type="tel"
          id="phone2"
          name="phone2"
          value={formData.phone2}
          onChange={(e) => handleChange('phone2', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="pin">PIN Number</label>
        <input
          type="text"
          id="pin"
          name="pin"
          value={formData.pin}
          onChange={(e) => handleChange('pin', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="organization">Organization Name</label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={(e) => handleChange('organization', e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>



      <button type="submit" onClick={handleChange}>Register</button>
    </form>
  </div>
);
}
export default SignUp;

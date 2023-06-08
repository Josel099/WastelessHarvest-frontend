import React, { useState } from 'react';
import "./signup.css"
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

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

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
      
     
     
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
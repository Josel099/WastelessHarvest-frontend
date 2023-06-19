import React from 'react';
import "./app.css"
import { Route,Routes } from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import Home from "./Components/home/Home"
import FoodList from './Components/foodList/foodList'
import Donation from './Components/donationForm/Donation';
function App() {
  return (
<div>
  

  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path='/foodList' element={<FoodList/>}/>
    <Route path='/donation' element={<Donation/>}/>
  </Routes>
  
 

</div>
  
  );
}

export default App;

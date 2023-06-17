import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from "./Components/navbar/Navbar"
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import Home from "./Components/home/Home"
import FoodList from './Components/foodListHomePage/foodList';
function App() {
  return (
<div>
  

  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path='/foodList' element={<FoodList/>}/>
  </Routes>
  
 

</div>
  
  );
}

export default App;

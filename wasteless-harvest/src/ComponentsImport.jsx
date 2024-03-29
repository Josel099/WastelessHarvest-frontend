import React ,{useState}from 'react'
import { Route,Routes } from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import Home from "./Components/home/Home"
import MyList from './Components/Mylist/Mylist'
// import FoodList from './Components/foodList/foodList'
import Donation from './Components/donationForm/Donation';
import Navbar from './Components/navbar/Navbar';
function ComponentsImport() {


    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
      setIsSignedIn(true);
    };



  return (
    <div>
        
        <Navbar isSignedIn={isSignedIn} />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn  onSignIn={handleSignIn} />}/>
    <Route path="/signup" element={<SignUp/>}/>
    {/* <Route path='/foodList' element={<FoodList/>}/> */}
    <Route path="/mylist" element={<MyList/>}/>
    <Route path='/donation' element={<Donation/>}/>
  </Routes>
  


    </div>
  )
}

export default ComponentsImport
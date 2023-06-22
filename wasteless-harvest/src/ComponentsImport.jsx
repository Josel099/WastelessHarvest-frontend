import React ,{useState}from 'react'
import { Route,Routes } from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import Home from "./Components/home/Home"
import Donation from './Components/donationForm/Donation';
import Navbar from './Components/navbar/Navbar';
import Mylist from './Components/Mylist/Mylist';
function ComponentsImport() {


    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isMyList , setIsMyList] = useState(false); // useState for checking the page is mylist or HomeListt ?
    const [isSettings, setIsSettings] = useState(false);//useState for loading the signup page or AccountUpdate

    const handleSignIn = () => {
      setIsSignedIn(true);
    };



  return (
    <div>
        
        <Navbar isSignedIn={isSignedIn} setIsMyList={setIsMyList} setIsSettings={setIsSettings}/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn  onSignIn={handleSignIn} />}/>
    <Route path="/signup" element={<SignUp isSettings={isSettings}/>}/>
    <Route path='/donation' element={<Donation/>}/>
    <Route path='/mylist' element={<Mylist isMyList={isMyList}/>}/>
  </Routes>
  

    </div>
  )
}

export default ComponentsImport
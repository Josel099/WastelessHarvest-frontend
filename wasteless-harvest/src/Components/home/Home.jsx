import React from 'react'
import styles from "./home.module.css"
import Navbar from "../navbar/Navbar"
function Home() {
  return (
     <div>
     <Navbar/>
     <div className={styles.herosection}>
      
     <p>Welcome to </p>
     <h1>Wastless harvest </h1>
   </div>
   </div>
  )
}

export default Home

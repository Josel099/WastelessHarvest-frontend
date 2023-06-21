import React ,{useState}from "react";
import axios from "axios";
import { useNavigate,Link  } from "react-router-dom";
import styles from "./signin.module.css";

function SignIn({ onSignIn }) {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    if ( !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:8085/api/v1/customer/login", {
        email: formData.email,
        password: formData.password
      }).then(
        (res) => {
          //console.log(res.data);
          if (res.data.message == "Email not exists") {
            alert("Email not exists");
          } else if (res.data.message == "Login Success") {
            navigate('/mylist');
            onSignIn(); // this method for displaying toogle bar when signed in .
            const customerId = res.data.customerId;// Extract the customer ID from the response and store it
            // Store the customer ID in local storage or in a state variable
            localStorage.setItem('customerId', customerId);
          } else {
            alert(" Email and Password not match");
          }
        },
        (fail) => {
          console.error(fail); // Error!
        }
      );
  } catch (err) {
    console.log.error(err);
  }
}



  return (
    <div>

    <div className={styles.mainbody}>
      <form>
        <div className={styles.header}>
        <h1>Sign In</h1>
        </div>
      <div className={styles.inputbox}>
        <div className={styles.email}>
          <input
            className={styles.emailbox}
            type="email"
            id="uname"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        
        <div className="password">
          <input
            className={styles.pswbox}
            type="password"
            id="pname"
            placeholder="password"
            name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
      </div>
       

        <button  className={styles.getin} type="submit" onClick={handleSubmit}>
          Login
        </button>

        <br />
        <div className={styles.last}>
          Don't have an account{" "}
          <Link className={styles.switch} to="/signup">
            Create
          </Link>
        </div>
        <br />
      </form>
    </div>
    </div>
  );
}

export default SignIn;

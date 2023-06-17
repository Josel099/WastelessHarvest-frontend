import React ,{useState}from "react";
import axios from "axios";
import { useNavigate,Link  } from "react-router-dom";
import "./signin.css";

function SignIn() {

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
      });
      //alert("Registation Successfully");
      navigate("/foodList");
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  }




  return (
    <div className="mainbody">
      <form>
        <div className="header">
        <h1>Sign In</h1>
        </div>
      <div className="inputbox">
        <div className="email">
          <input
            className="emailbox"
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
            className="pswbox"
            type="password"
            id="pname"
            placeholder="password"
            name="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
      </div>
       

        <button  className="getin" type="submit" onClick={handleSubmit}>
          Login
        </button>

        <br />
        <div className="last">
          Don't have an account{" "}
          <Link className="switch" to="/signup">
            Create
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default SignIn;

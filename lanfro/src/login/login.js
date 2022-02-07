import "./login.css";
import { useState } from "react";
import { setToken } from "../utils/authoperations";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";

import { Link } from "react-router-dom";
function Login() {
  const [loginstatus,setstatus]=useState(false)
  const navigate = useNavigate();
  const [loginmsg, setmsg] = useState("");
  const login = async (elem) => {
    try {
      elem.preventDefault();
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          email: elem.target.email.value,
          password: elem.target.password.value,
        }),
      });
      const data = await response.json();
      if (data.data === "error") {
        setmsg(data.message);
      } else {
        console.log("token", await data);
        setToken(data.data);
        navigate("/creatingorder");
      }
    } catch (e) {
      console.log(e);
      alert('Incorrect Username/password')
    }
  };
  return (
<>
      <Header />
      <div className="mainbody">
        <div className="leftbody">
          <div className="company">
            <h1 className="title">Laundry Services</h1>
            <p className="subtitle">Doorstep Wash & Dry Clean Service</p>
            <p className="alternate">Don't have an account?</p>
            <Link to="/signup">
              <button className="register_btn_block">
                <p className="register_btn">Register</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="rightbody">
          <div className="inside_right_body">
            <p className="signinheading">SIGNIN</p>
            <form onSubmit={(elem)=>login(elem)} className="inputform">
              <input
                style={{
                  height: "40px",
                  borderLeft: "0",
                  borderRight: "0",
                  borderTop: "0",
                }}
                type="text"
                name="email"
                placeholder="Email/Phone"
              />
              <br />
              <input
                style={{
                  height: "40px",
                  borderLeft: "0",
                  borderRight: "0",
                  borderTop: "0",
                }}
                name="password"
                type="password"
                placeholder="password"
              />
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
              <button
                className="signin_btn"
                type="submit"
                value="Sign In" >Sign In</button>
      
            </form>
          </div>
        </div>
      </div>
      <Referal />
      <Footer />
      <Copyright />
    </>
  );
}
export default Login;

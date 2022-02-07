import "./signup.css";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignUp() {
  const history = useNavigate();
  const register = async (elem) => {
    try {
      elem.preventDefault();
      await fetch("http://localhost:5000/sign_up", {
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
          name: elem.target.name.value,
          email: elem.target.email.value,
          password: elem.target.password.value,
          address: elem.target.address.value,
          phone: elem.target.phone.value,
          state: elem.target.state.value,
          district: elem.target.district.value,
          pincode: elem.target.pincode.value,
        }),
      });
      history("/");
    }catch(e){
      console.log(e);
    }
  };
  return (
    <>
    <Header />
    <div className="body">
      <div className="container1">
        <div className="heading">
          <p>Laundry</p>
          <p>Services</p>
        </div>
        <div className="content">
          <p>Doorstep &</p>
          <p>Dryclean Service</p>
        </div>
        <div className="already">
          <p>Already Have Account</p>
        </div>
        <Link to="/">
          <button className="signinb">
            <p className="signint">Sign In</p>
          </button>
        </Link>
      </div>

      <div className="container2">
        <div className="heading1">
          <p>
            <h1>REGISTER</h1>
          </p>
        </div>
        <div>
          <form method="POST" onSubmit={(elem)=>register(elem)} className="registerdata">
            <div className="inputfield">
              <div className="inputfield1">

                  <input type="name" name="name" placeholder="Name"></input>

                  <input type="phone" name="phone" placeholder="Phone"></input>
                  
                  <input type="text" name="district" placeholder="District" ></input>
                  
                  <input type="pincode" name="pincode" placeholder="Pincode" ></input>
                  </div>
                  <div className="inputfield1">
                  <input type="email" name="email" placeholder="Email"></input>

                  <input type="text" name="state" placeholder="State"></input>

                  <input type="address" name="address" placeholder="Address" ></input>

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  ></input>

              </div>
            </div>

            <div className="svgterms">
              <div>
                <p>
                  I agree to Terms & Conditions receiving marketing and
                  promotional materials
                </p>
              </div>
            </div>
            <div className="registerbutton">
              <button type="submit" >Register</button>
            </div>
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

export default SignUp;

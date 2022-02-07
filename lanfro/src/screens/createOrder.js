import React from "react";
import { useNavigate } from "react-router-dom";
import "./total.css";
import home from "./reqimg/homes.png";
import list from "./reqimg/hamberg.png";
import image1 from "./reqimg/userphoto.jpg";

function Creatingorder() {
  const history = useNavigate();

  function addorder() {
    console.log("creating Orders");
    history("/orderPage");
  }
  return (
    <>
    <div class="container-fluid">
      <div className="Container1">
        <div className="createordhead">
          <div className="headtext">
            <h2>LAUNDRY</h2>
          </div>
          <div className="headopts">
            <div className="pricebtn">
              <p>Pricing</p>
            </div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="careerbtn">
              <p>Career</p>
            </div>
          <div className="userHead">
            <img src={image1} alt="userimage" />
            <h2 className="username">User Name</h2>
          </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div className="create-ord-body">
          <div className="navbar">
            <div className="home">
              <img src={home} alt="home" />
            {/* </div> */}
            {/* <div className="more"> */}
            <p></p>
              <p>➕</p>
            {/* </div> */}
            {/* <div className="list"> */}
              <img src={list} alt="list" />
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row ord2">
              <div class="col-lg-2 crt-ord-head">
                <b>Order | 0</b>
              </div>
              <div class="col-lg-2">
                <div class="search-bar">
                  <input type="text"
                  className="srch-box"
                  placeholder= "🔍"
                  />
                </div>
              </div>
            </div>
            {/* <div class="createOrdButton"> */}
              <h5 className="createOrdButton">No order available</h5>
              <button class="btn btn-light crtbtn" onClick={addorder}> Create </button>
            {/* </div> */}
          </div>
        </div>
      </div>
      </div>
      <div className="foot">
        <p> 2021 &copy; Laundry </p>{" "}
      </div>{" "}
    </>
  );
}
export default Creatingorder;

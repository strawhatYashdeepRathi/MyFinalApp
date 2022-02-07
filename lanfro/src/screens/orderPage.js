import userpic from "./images/userphoto.jpg";
import home from "./images/home.png";
import list from "./images/list.png";
import Offcanvas from 'react-bootstrap/Offcanvas'
import React, { useState } from "react";
import "./total.css";
import OrderController from "./orderController";
import Summarydetails from './summarycontroller';
let allDetails = [];
const orderHistory = { assign: new Map() };

function Orderpage() {

  // -----------------------------  for opening summary and closing it
  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  //------------------------------------  props assigned to be used later 
  function detailData(props){
    orderHistory.assign.set(props.product, props.selected);
    allDetails = [...orderHistory.assign].map(([product, selected]) => ({
      product,
      selected,
    }));
    return;
  }

//------------------------------------------ display options data ro select from wide range of products 

  const holdData = [
    {
      image: "shirts.jpg",
      title: "Shirt",
      description: "Shirts for Laundry",
    },
    {
      image: "tshirts.jpg",
      title: "tshirt",
      description: "T-shirts for Laundry ",
    },
    {
      image: "jeans.jpg",
      title: "Jeans",
      description: "Jeans for Laundry",
    },
    {
      image: "boxers.jpg",
      title: "Boxers",
      description: "Boxers for Laundry",
    },
    {
      image: "trouses.jpg",
      title: "Trouses",
      description: "Trouses for Laundry",
    },
    {
      image: "joggers.jpg",
      title: "Joggers",
      description: "Joggers for Laundry",
    },
    {
      image: "others.jpg",
      title: "Others",
      description: "Other items for Laundry",
    },
  ];

  //----------------------------------------- whole content structure -------------------

  return (
    <>

  {/* ----------------------- --------------------page 1 structure for selecting vales to set order     */}

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
            <img src={userpic} alt="userimage" />
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
              <p className="ord-pg-plus">➕</p>
            {/* </div> */}
            {/* <div className="list"> */}
              <img src={list} alt="list" />
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row ord2">
              <div class="col-lg-2 crt-ord-head">
                <b>Create Order</b>
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
            
            <table className="tab">
              <thead className="tabHead">
                <tr class="table-dark">
                  <th className="prd-ty-head">Product Types</th>
                  <th className="quant-head">Quantity </th>
                  <th className="wash-t-head">Wash-Type</th>
                  <th className="price-head">Price</th>
                  <th className="reset-opt"></th>
                </tr>
              </thead>
              <tbody>
                {holdData.map((eachProduct)=>(
                  <OrderController                  
                  image={eachProduct.image}
                  title={eachProduct.title}
                  description={eachProduct.description}
                  detailer = {detailData}
                  />
                ))}
              </tbody>
            </table>
            <div class="btn-align">
              <button class="btn btn btn-outline-primary cancel">Cancel</button>
              <button
                class="btn btn btn-primary proceed"
                onClick={handleShow}>Proceed</button>
            </div>

    {/* ----------------------- --------------------summary page - offcanvas is used from bootstrap ------------     */}


              <Offcanvas show={show} onHide={handleClose} placement={'end'} className='canvas'>
              <Offcanvas.Header className="sum-title">
                <Offcanvas.Title>Summary</Offcanvas.Title>
                <button onClick={handleClose}>⨉</button>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div class="row mainadd">
                <div class="col-lg-4">
                  <select className="select-location">
                  <option disabled selected value> -- Select City -- </option>
                    <option value="1">JP Nagar</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <h5>Store Address</h5>
                  <h8>Near Tivoli, Varkala</h8>
                </div>
                <div class="col-lg-4">
                  <h5>Store Phone</h5>
                  <h8>+919000080000</h8>
                </div>
              </div>
              <Summarydetails allDetails={allDetails} />

              


              </Offcanvas.Body>
              </Offcanvas>
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

export default Orderpage;
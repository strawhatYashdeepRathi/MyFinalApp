import {React, useState} from "react";
import Summarypart from "./summaryconpart";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import { getToken } from "../utils/authoperations";
import {Button} from 'react-bootstrap'
import successS from "./images/success.PNG";
import './total.css'
function Summarydetails(props) {
  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const navigate = useNavigate();

  const totp = props.allDetails
    .map((item) => item.selected.price)
    .reduce((prev, curr) => prev + curr, 0);

  const quanp = props.allDetails
    .map((item) => item.selected.quantity)
    .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

  const article = [];
  props.allDetails.forEach((member) => {
    article.push({ producttype: member.product, ...member.selected });
  });

  const setwashs = async () => {
    const totalprice = totp;
    const totalitems = quanp;
    const productlist = article;
    console.log(productlist, totalprice, totalitems);
    try {
      await fetch("http://localhost:5000/order", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          totalprice,
          productlist,
          totalitems,
        }),
      });
      navigate("/existorder")
      console.log("done");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <p class="ord-details">Order Details</p>
      {props.allDetails.length > 0 &&
        props.allDetails.map(
          (holder) =>
            holder.selected.quantity > 0 &&
            (holder.selected.wash ||
              holder.selected.iron ||
              holder.selected.fold ||
              holder.selected.pack) && (
              <Summarypart
                producname={holder.product}
                clicker={holder.selected}
                cost={holder.selected.price}
              />
            )
        )}

      <div class="sumdown">Sub Total : {totp}</div>

      <div class="sumdown">Pick Up Charges : 90</div>

      <div class="row finpric">
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4 ">Total : RS {totp + 90}</div>
      </div>
      <div>
        <h6 className="addressg">Address</h6>
      </div>
      <div className="addressallg">
        <div className="boxg">
          <div className="conteng">
            <h5 className="addresshg">Home</h5>
            <h5 className="addressdg">near srkr engg college,bhimavaram</h5>
          </div>
        </div>
        <div className="boxg">
          <div className="conteng">
            <h5 className="addresshg">other</h5>
            <h5 className="addressdg">d.no:14-3,near pvp mall,bhimavaram</h5>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn btn-outline-primary cancel add-new">
            ADD NEW
          </button>
        </div>
      </div>
      <div class="confbtn"></div>
        <button class="btn btn btn-primary proceed" onClick={handleShow}>
          Confirm
        </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img src={successS} alt="success_img" />
        </Modal.Header>
        <Modal.Body><h5>Your order is Successful</h5>
        <h7>You can track your delivery in the "Order" section</h7>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="goto" onClick={setwashs}>
            Go to Orders
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Summarydetails;
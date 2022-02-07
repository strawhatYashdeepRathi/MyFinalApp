import React, { useState, useEffect } from "react";

import "./total.css";

import wash from "./images/wash.png";
import washS from "./images/washclick.png";
import pack from "./images/pack.png";
import packS from "./images/packclick.png";
import iron from "./images/iron.png";
import ironS from "./images/ironclick.png";
import fold from "./images/fold.png";
import foldS from "./images/foldclick.png";

function OrderController(props){
    const [washi, setWash] = useState(false);
    const [ironi, setIron] = useState(false);
    const [foldi, setFold] = useState(false);
    const [packi, setPack] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState("--");
    const [type, setType] = useState(0);
    const washCost = 25;
    const ironCost = 15;
    const packCost = 25;
    const foldCost = 10;

    function washClick() {
    setWash(!washi);
    }
    function ironClick() {
    setIron(!ironi);
    }
    function packClick() {
    setPack(!packi);
    }
    function foldClick() {
    setFold(!foldi);
    }
    function res_total() {
        let cost = 0;
        let type = 0;
        if (washi) {
          cost += quantity * washCost;
          type += washCost;
        }
        if (ironi) {
          cost += quantity * ironCost;
          type += ironCost;
        }
    
        if (packi) {
          cost += quantity * packCost;
          type += packCost;
        }
        if (foldi) {
          cost += quantity * foldCost;
          type += foldCost;
        }
    
        setPrice(cost);
        setType(type);
    }
    useEffect(() => {
    res_total();
    props.detailer({
        product: props.title,
        selected: {
        quantity: quantity,
        wash: washi,
        iron: ironi,
        fold: foldi,
        pack: packi,
        price: price,
        },
    });
    });
    return(
        <tr>
            <td>
                <div class="row prd-type-f">
                    <div class="col-lg-2 prod-typ-img">
                        <img src={`${process.env.PUBLIC_URL}/prodtype/${props.image}`}
                        alt="shirt" class = "prod_img"/>
                        
                    </div>
                    <div class="col-lg-10">
                        <b>{props.title}</b>
                        <p>{props.description}</p>
                    </div>
                </div>
            </td>
            <td>
                <input type="text"
                maxlength='4'
                size='1'
                class = "form-control"
                onChange={(e)=>{
                    setQuantity(e.target.value);
                }}
                value={quantity}
                />
            </td>
            <td>
                <div class="row">
                <div class="col-lg-3">
                    <img
                    src={washi ? washS : wash}
                    onClick={() => {
                        washClick();
                    }}
                    alt="wash"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={ironi ? ironS : iron}
                    onClick={() => {
                        ironClick();
                    }}
                    alt="press"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={foldi ? foldS : fold}
                    onClick={() => {
                        foldClick();
                    }}
                    alt="fold"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={packi ? packS : pack}
                    onClick={() => {
                        packClick();
                    }}
                    alt="pack"
                    />
                </div>
                </div>
            </td>
            <td>{`${quantity} x ${type} = ${price}`}</td>
            <td>
                <button
                type="button"
                class="reset-opt"
                onClick={() => {
                    setQuantity(0);
                    setWash(false);
                    setFold(false);
                    setPack(false);
                    setIron(false);
                }}
                >
                Reset
                </button>
            </td>
        </tr>
    )
}
export default OrderController;
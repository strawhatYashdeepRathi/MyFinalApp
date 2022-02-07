const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const dayjs = require("dayjs");
const router = express.Router();

const Items = require("../model/createorders");
router.get("/order", async function(req, res) {
    try {
        // const existingorders = await Items.find().sort({_id:-1});
        const existingorders = await Items.find({ user: req.user }).sort({
            _id: -1,
        });
        return res.json({
            status: "success",
            existingorders,
        });
        console.log("existingorders", existingorders);
    } catch (e) {
        res.status(500).json({
            status: "signup failed",
            message: e.message,
        });
    }
});
router.post("/order", async function(req, res) {
    try {
        const { totalitems, totalprice, productlist, status } = req.body;
        const Orders = await Items.create({
            totalitems,
            totalprice,
            dateOrdered: dayjs().format("dddd, MMM D, h:mm A"),
            productlist,
            user: req.user,
        });
        return res.json({
            status: "success",
            message: "Order Succesfull",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }
});
router.get("/product/:id", async function(req, res) {
    try {
        const Orders = await Items.find({ _id: req.params.id });
        if (!Orders) {
            return res.status(404).json({
                status: "Not updated",
                message: "post not created/found",
            });
        }
        return res.json({
            status: "success",
            message: "Order Succesfull",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }
});

router.put("/product/:id", async function(req, res) {
    try {
        const { status } = req.body;
        const statusupdate = await Items.findOne({ _id: req.params.id });

        if (!statusupdate) {
            return res.status(404).json({
                status: "Not updated",
                message: "order not created/found",
            });
        }
        const Updatestatus = await Items.updateOne({ _id: req.params.id }, {
            status,
        });

        // const updatedstatus = await Items.findOne({_id:req.params.id});

        return res.json({
            status: "success",
            message: "Status Updated",
            // updatedstatus
        });
    } catch (e) {
        res.status(500).json({
            status: "Not an authorized user to update",
            message: e.message,
        });
    }
});

module.exports = router;
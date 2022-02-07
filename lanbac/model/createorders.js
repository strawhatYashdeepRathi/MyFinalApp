const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderschema = new Schema({
    dateOrdered: {
        type: String,
    },
    productlist: [{
        producttype: { type: String },
        quantity: { type: Number, default: 0 },
        wash: { type: String, default: false },
        iron: { type: String, default: false },
        fold: { type: String, default: false },
        pack: { type: String, default: false },
        price: { type: Number, default: 0 },
    }, ],
    totalprice: {
        type: Number,
    },
    totalitems: {
        type: Number,
    },
    storelocation: {
        type: String,
        default: "Jp nagar",
    },
    city: {
        type: String,
        default: "Bengaluru",
    },
    storephone: {
        type: String,
        default: "9876543211",
    },
    status: {
        type: String,
        default: "Ready to pickup",
    },
});

const order = mongoose.model("order", orderschema);
module.exports = order;
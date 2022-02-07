const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(bodyParser());
app.use(cors());
const dayjs = require("dayjs");
mongoose.connect(MONGOURI);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo ");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

const loginroutes = require("./routes/user");
const orders = require("./routes/order");

app.use("/order", async function (req, res, next) {
  try {
    const token = await req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "not authenticated",
      });
    }
    const decoded = jwt.verify(token, "secret");
    if (!decoded) {
      return res.status(401).json({
        status: "failed",
        message: "token invalid",
      });
    }
    req.user = decoded.data;
  } catch (e) {
    return res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }

  next();
});

app.use("/", loginroutes);
app.use("/order", orders);

app.listen(5000, () => console.log("server started"));

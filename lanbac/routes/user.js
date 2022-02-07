const express = require("express");
const User = require("../model/loginschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async function(req, res) {
    try {
        const { email, name, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.json({
                status: "failed",
                message: "please enter a valid email or phone number.",
                data: "error",
            });
        }

        const password_match = await bcrypt.compare(password, user.password);
        if (!password_match) {
            return res.json({
                status: "failed",
                message: "password incorrect",
                data: "error",
            });
        }
        const token = jwt.sign({
                data: user._id,
            },
            "secret"
        );
        res.json({
            status: "success",
            data: token,
        });
    } catch (e) {
        return res.json({
            status: "failed",
            message: "internal error",
        });
    }
});

router.post("/sign_up", async function(req, res) {
    try {
        const { name, email, password, address, phone, state, district, pincode } =
        req.body;
        const hash = await bcrypt.hash(password, 10);
        console.log(hash);
        await User.create({
            name,
            email,
            password: hash,
            address,
            phone,
            state,
            district,
            pincode,
        });
        res.json({
            status: "success",
            message: "successfully signed up.",
        });
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message,
        });
    }
});
module.exports = router;
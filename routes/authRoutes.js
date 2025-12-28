const express = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.get("/check", (req,res)=>{
    res.send("Auth Route Working");
});

// Register
router.post("/signup", async (req, res) => {
    console.log("Signup hit, Body:", req.body); 
    try {
        const { name, email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ msg: "Email already registered" });

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPass });
        await newUser.save();

        res.json({ msg: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });

        res.json({ msg: "Logged in", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
    res.send("User Profile Page");
});

router.get("/login", (req, res) => {
    res.send("Login Page");
});

module.exports = router;

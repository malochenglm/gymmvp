const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require ("../middleware/authMiddleware");

//fake database
let users = [];

//users
router.post("/users", async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

//login
router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const user = user.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: "invalid credentials" });
    }

    const validPassword = await bcrypt.compare(ppassword, user.password);

    if (!validPassword) {
        return res.status(401).json({message: "Invalid credentials"});
    }

    const token = jwt.sign(
        {
            userID: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )
    res.json({
        message: "Login successful",
        token: token
    });
});

//get user by
router.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.if));
    if (!users) {
        return res.status(404).json({message: "User not found"});
    }

    res.json(user);
});

module.exports = router;

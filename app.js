const express = require ("express");
const userRoutes = require ("./src/routes/userRoutes")
const cors = require("cors");
require("dotenv").config();

const app = express ();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

//routes

app.get("/health", (req, res) => {
    res.json({
        service: "user-service",
        status: "runnung"
    });
});

//port
const PORT = process.env.PORT || 3001;

//start
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
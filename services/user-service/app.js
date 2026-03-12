const express = require ("express");
const userRoutes = require ("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./src/config/database.js");
require("./src/models/user.model")

const app = express ();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);

// health route

app.get("/health", (req, res) => {
    res.json({
        service: "user-service",
        status: "running"
    });
});

async function start() {
    try {
        await sequelize.authenticate();
        console.log("Connection to PostgreSQL successful");

        await sequelize.sync();
        console.log("Tables synced");

        const PORT = process.env.PORT || 3001;

        app.listen(PORT, () => {
            console.log(`User service running on port ${PORT}`);
            console.log(`Health check → http://localhost:${PORT}/health`);
        });

    } catch (error) {
        console.error(error);
    }
}

start();
const express = require('express');
const connectDB = require('./config/db');
require("dotenv").config();

const app = express();
app.use(express.json());

// Database connect
connectDB();

// Import Routes (must be before listen)
const authRoutes = require("./routes/authRoutes");

// Use Routes
app.use("/api/auth", authRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send("Smart ToDo API is running... Database Connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);


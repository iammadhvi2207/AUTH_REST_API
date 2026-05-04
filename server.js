require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const authMiddleware = require("./middleware/authMiddleware");
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// DB connection
connectDB();

// routes
app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.status(200).json({ message: "API is running 🚀" });
});

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});


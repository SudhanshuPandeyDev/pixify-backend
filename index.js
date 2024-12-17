// Import necessary modules using CommonJS syntax
const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes.js");
const postRoutes = require("./routes/postRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const connectDb = require("./connection.js");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Get the port from environment variables
const port = process.env.PORT;

// Connect to the database
connectDb();

// Set up CORS middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Allow your frontend origin
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable cookies or other credentials
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Define the API routes
app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

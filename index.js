import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDb from "./connection.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT;

connectDb();

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Allow your frontend origin
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable cookies or other credentials
  })
);
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

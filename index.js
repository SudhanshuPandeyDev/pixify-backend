const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./connection");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const postRoutes = require("./routes/postRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");


dotenv.config();

const app = express();
// port define karna hoga - Port hota hai darwaja
const port = process.env.PORT || 5000;

connectDb();
// Making routes
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});


app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

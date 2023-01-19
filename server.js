const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// connect DB
connectDB();

//load ENV variables

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

// Routes
storesRoutes = require("./routes/stores");

app.use("/api/v1/stores", storesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(process.env.MONGO_URI);
  console.log(
    `🚀🚀🚀 Server is running on Port ${PORT} in ${process.env.NODE_ENV}`
  );
});

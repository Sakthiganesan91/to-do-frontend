const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const todoRoutes = require("./routes/toDoRoutes");

//MIDDLEWARE

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/todo", todoRoutes);

mongoose.connect(process.env.MONGODB_URI);
app.listen(process.env.PORT || 5000);

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDb = require("./db");

/* App Initialization */
const app = express();
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Listeners */
mongoose.connection.once("open", () => {
  console.log("Connected to database!");
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});

mongoose.connection.on("error", (err) => {
  console.log("Mongo error: ", err);
});

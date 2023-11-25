const express = require("express");
const dotenv = require("dotenv");

/* App Initialization */
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Listeners */
app.listen(PORT, () => {
  console.log("Server listening on PORT: ", PORT);
});

// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { pool } = require("./database/dbconfig");

// middlewares
dotenv.config();
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
	res.send("GET request to the homepage");
});

// server
app.listen(process.env.PORT, () => {
	console.log(`🚀server running on http://localhost:${process.env.PORT}/`);
});

module.exports = app;

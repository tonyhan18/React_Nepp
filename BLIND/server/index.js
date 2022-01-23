// 강의
let express = require("express");
// import express from "express";
let cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json()); // POST가 왔을때 req.body에 담개해준다.
app.use(express.urlencoded({ extended: true })); //?
app.get("/", (req, res, next) => {
  res.send("Server is running!");
});
app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

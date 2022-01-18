import express from "express";
let router = express.Router();

/* GET users listing. */
// return msg
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default router;

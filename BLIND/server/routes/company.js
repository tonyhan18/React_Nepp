const { Company } = require("../mongoose/model.js");
var express = require("express");
var router = express.Router();

// 회사 추가
router.post("/company/create", async (req, res) => {
  const { name, imgAddress } = req.body;
  const newCompany = await Company({ name }).save();
  res.send(newCompany ? true : false);
});

module.exports = router;

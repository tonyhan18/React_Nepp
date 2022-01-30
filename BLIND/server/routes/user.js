const { User } = require("../mongoose/model.js");
var express = require("express");
var router = express.Router();

// 로그인 요청
router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await User.findOne({ email: email });
  if (!loginUser._id) {
    return res.send({
      error: true,
      msg: "존재하지 않는 이메일",
    });
  }
  const correctPassword = await loginUser.authenticate(password);
  if (!correctPassword) {
    return res.send({
      error: true,
      msg: "비밀번호 불일치",
    });
  }
  return res.send({
    email: loginUser.email,
    nickname: loginUser.nickname,
    error: false,
  });
});

router.post("/user/create", async (req, res) => {
  const { nickname, company, email, password } = req.body;
  const newUser = await User({
    email,
    nickname,
    password,
    company,
  }).save();
  console.log(newUser);
  res.send(newUser._id ? true : false);
});

// 사용자 정보 변경

// 사용자 삭제

// 프로필 이미지 추가

module.exports = router;

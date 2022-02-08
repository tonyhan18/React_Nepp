const express = require("express");
const conn = require("../db/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = require("../config/index.js");
const { User } = require("../mongoose/model.js");
const { token } = require("morgan");
let router = express.Router();

const postCreateUsers = async function (req, res, next) {
  const { nickname, company, email, password } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.send({ success: false, msg: "동일한 계정이 존재합니다" });
  }
  const newUser = new User({ nickname, company, email, password }).save();
  if (!newUser || !newUser._id) {
    res.send({ success: false, msg: "계정 생성에 실패했습니다" });
  }
  res.send({ success: true, msg: "가입성공" });
};

// Try Login
const postUserLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const loginUser = await User.findOne({ email: email });
  console.log(loginUser);
  if (!loginUser || !loginUser._id) {
    return res.send({
      success: false,
      msg: "존재하지 않는 이메일",
    });
  }
  const correctPassword = await loginUser.authenticate(password);
  if (!correctPassword) {
    return res.send({
      success: false,
      msg: "비밀번호 불일치",
    });
  }
  const secret = req.app.get("jwt-secret");
  const token = jwt.sign(
    {
      id: loginUser._id,
      email: loginUser.email,
      nickname: loginUser.nickname,
    },
    secret,
    {
      expiresIn: "7d",
      issuer: "alumni",
      subject: "auth",
    }
  );

  res.send({
    email: loginUser.email,
    nickname: loginUser.nickname,
    token: token,
    success: true,
    msg: "로그인 성공",
  });
};

const getUserToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.send(false);
  }
  if (authorization) {
    const token = authorization.split(" ")[1];
    const secret = req.app.get("jwt-secret");
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        return res.send(err);
      }
      res.send({
        email: data.email,
        nickname: data.nickname,
      });
    });
  }
};

// getLogin

// const postUsersToken = async function (req, res, next) {
//   console.log(req.body);
//   const { email, password } = req.body;
//   const loginUser = await User.findOne({ email: email });

//   if (!loginUser._id) {
//     return res.send({
//       success: false,
//       message: "일치하는 유저가 없습니다",
//     });
//   }
//const correctPassword = await loginUser.authenticate(password);

// const query = `SELECT id, salt,password FROM user WHERE user_name='${username}';`;
// const [users] = await conn.query(query);
// //console.log(users[0]);
// if (users.length === 0) {
//   res.send({ success: false, message: "일치하는 유저가 없습니다" });
// }
// // 비밀번호 검증
// const user = users[0];
// const { salt } = user;
// const hashedPW = await bcrypt.hash(password, salt);
// if (user.password != hashedPW) {
//   return res
//     .status(401)
//     .send({ success: false, message: "비밀번호가 틀렸습니다" });
// }
// // 토큰 발급
// const payload = { userId: user.id };
// const option = { expiresIn: "1h" };
// const token = jwt.sign(payload, secretkey, option);
// res.send({ success: true, token });
//};

// const createUsers = (req, res, next) => {
//   const { nickname, company, email, password } = req.body;
//   const existUser = await User.findOne({ email });
//   const newUser = new User({
//     nickname,
//   }).save();
// };

/* GET users listing. */
// return msg
router.post("/create", postCreateUsers);
router.post("/login", postUserLogin);
router.get("/token", getUserToken);
//router.post("/create", createUsers);

module.exports = router;

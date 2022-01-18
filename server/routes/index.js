import express from "express";
let router = express.Router();

/* GET home page. */
// return render
// 그냥 index만 써도 views 폴더의 index를 의미한다.
// 이게 가능한게 app.js의 app.set(views와 view engine) 부분 덕분이다.
router.get("/", function (req, res, next) {
  res.render("index", { title: "React" });
});

export default router;

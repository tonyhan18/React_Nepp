// 강의
const express = require("express");
const cors = require("cors");
const { article, company, comment, user, board, reply } = require("./routes");
const app = express();
const PORT = 8000;
const SECRET = "THISISSECRET";

app.use(cors());
app.use(express.json()); // POST가 왔을때 req.body에 담개해준다.
app.use(express.urlencoded({ extended: true })); //?

// JWT 시크릿 설정
app.set("jwt-secret", SECRET);

// 기능별 라우터 추가
app.use(article);
app.use(company);
app.use(user);
app.use(board);
app.use(comment);
app.use(reply);

// 상태 확인용
app.get("/", (req, res, next) => {
  res.send("Server is running!");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

// 강의

// var createError = require("http-errors");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// //app.use("/", indexRouter);

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

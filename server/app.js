// essential
import express from "express";
import cors from "cors";
//routes
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

// use express and init settings
let app = express();
app.use(cors({ origin: "http://localhost:3000" })); // cors처리
app.use(express.json()); // POST가 왔을때 req.body에 데이터를 담아준다
app.use(express.urlencoded({ extended: false })); //

// route control
app.use("/", indexRouter);
app.use("/users", usersRouter);

// default settings
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const __dirname = path.resolve();

// view engine setup
// view control
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;

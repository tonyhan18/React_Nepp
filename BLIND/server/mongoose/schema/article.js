const mongoose = require("mongoose");
//import AutoIncrement from "mongoose-sequence"; //무한 스크롤
const AutoIncrement = require("mongoose-sequence")(mongoose);
let Schema = mongoose.Schema;

const Article = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  board: { type: Schema.Types.ObjectId, ref: "Board", required: true },
  createdAt: { type: Date, default: Date.now, required: true },

  // 동적으로 변화할 수 있는 데이터
  viewCount: { type: Number, default: 0 },
  thumbupCount: { type: Number, default: 0 },
  thumbdownCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  deleteTime: { type: Number, default: 0 },

  // (옵션) : 사용자가 게시글에 추가할 수 있는 데이터
  articleImgAddress: { type: String, default: null },
  memtion: { type: Schema.Types.ObjectId, ref: "User" },
});

Article.plugin(AutoIncrement, { inc_field: "key" }); //무한 스크롤

module.exports = Article;

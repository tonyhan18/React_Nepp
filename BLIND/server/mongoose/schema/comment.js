const mongoose = require("mongoose");
let Schema = mongoose.Schema;

// 댓글
const Comment = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  article: { type: Schema.Types.ObjectId, ref: "Article" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },

  // 동적으로 변화할 수 있는 데이터
  viewCount: { type: Number, default: 0 },
  thumbupCount: { type: Number, default: 0 },
  thumbdownCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  deleteTime: { type: Number, default: 0 },

  // (옵션) : 사용자가 게시글에 추가할 수 있는 데이터
  articleImgAddress: { type: String, default: null },
});

module.exports = Comment;

const { Article, Comment } = require("../mongoose/model.js");
var express = require("express");
var router = express.Router();

// 댓글 생성하기
router.post("/comment/create", async (req, res) => {
  const { author, article, content } = req.body;
  const newContent = await Comment({
    author,
    article,
    content,
  }).save();
  res.send(newContent._id ? true : false);
});

// 댓글 수정
router.patch("/comment/update", async (req, res) => {
  const { id, author, content } = req.body;
  const updateComment = await Comment.findOneAndUpdate(
    {
      _id: id,
      author,
    },
    {
      content,
    },
    {
      new: true,
    }
  );

  console.log(updateComment);
  res.send(updateComment);
});

// 댓글 완전
router.delete("/comment/delete/hard", async (req, res) => {
  const { id, author } = req.body;
  const deletedComment = await Comment.deleteOne({
    _id: id,
    author,
  });

  console.log(deletedComment);
  res.send(deletedComment);
});

// soft delete
router.delete("/comment/delete/soft", async (req, res) => {
  const { id, author } = req.body;
  const deletedComment = await Comment.findOneAndUpdate(
    {
      _id: id,
      author,
    },
    {
      //30일 후의 시간이 저장
      deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    }
  );

  console.log(deletedComment);
  res.send(deletedComment);
});

module.exports = router;

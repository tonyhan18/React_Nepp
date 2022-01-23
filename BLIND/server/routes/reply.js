const { Reply, Comment } = require("../mongoose/model.js");
var express = require("express");
var router = express.Router();

// 댓글 생성하기
router.post("/Reply/create", async (req, res) => {
  const { author, comment, content } = req.body;
  const newReply = await Reply({
    author,
    comment,
    content,
  }).save();
  res.send(newReply._id ? true : false);
});

// 댓글 수정
router.patch("/Reply/update", async (req, res) => {
  const { id, author, content } = req.body;
  const updateReply = await Reply.findOneAndUpdate(
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

  res.send(updateReply);
});

// hard delete : DB에도 존재하지 않게 만드는것
router.delete("/reply/delete/hard", async (req, res) => {
  const { id, author } = req.body;
  const deletedReply = await Reply.deleteOne({
    _id: id,
    author,
  });

  res.send(deletedReply);
});

// soft delete : 일반 사용자는 보지 못하는 상태, 일정 기간이 지나면 삭제될 상태
router.delete("/reply/delete/soft", async (req, res) => {
  const { id, author } = req.body;
  const deletedReply = await Reply.findOneAndUpdate(
    {
      _id: id,
      author,
    },
    {
      //30일 후의 시간이 저장
      deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    }
  );

  res.send(deletedReply);
});

module.exports = router;

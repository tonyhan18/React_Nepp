const { Article, Comment } = require("../mongoose/model.js");
var express = require("express");
var router = express.Router();

// 개별 게시글 가져오는 라우터
router.get("/article/:id", async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  const comment = await Comment.find({ article: id });
  res.send({ article, comment });
});

router.post("/article/create", async (req, res) => {
  const { author, title, content, board } = req.body;
  const newArticle = await Article({
    author,
    title,
    content,
    board,
  }).save();
  res.send(newArticle);
});

// 게시글 수정
router.patch("/article/update", async (req, res) => {
  const { id, author, content } = req.body;
  const updateArticle = await Comment.findOneAndUpdate(
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
  res.send(updateArticle);
});

// article 완전 삭제
router.delete("/article/delete/hard", async (req, res) => {
  const { id, author } = req.body;
  const deletedContent = await Comment.deleteOne({
    _id: id,
    author,
  });

  res.send(deletedContent);
});

// article 완전 삭제
router.delete("/article/delete/soft", async (req, res) => {
  const { id, author } = req.body;
  const deletedContent = await Comment.findOneAndUpdate(
    {
      _id: id,
      author,
    },
    {
      deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    }
  );

  res.send(deletedContent);
});

module.exports = router;

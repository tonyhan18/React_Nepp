const express = require("express");
const Article = require("../mongoose/schema/article");
const Board = require("../mongoose/schema/board");
let router = express.Router();

const getBoard = async (req, res, next) => {
  const board = await Board.find();
  if (Array.isArray(board)) {
    res.send({ error: true, msg: "게시판을 발견할 수 없음" });
  }
  let mainContent = {};

  Promise.all(
    board.map(async (b) => {
      const recentArticles = await Article.find({ board: b._id });
      if (!Array.isArray(recentArticles)) {
        return;
      }
      mainContent.push({
        ...b.doc,
        content: recentArticles,
      });
    })
  )
    .then((res) => {
      // const content = Object.keys(mainContent.map((v)=>{
      // 	return {
      // 		slug:v,
      // 		content: mainContent(v)
      // 	}
      // }))
      res.send({
        content: mainContent,
        error: false,
        msg: "성공",
      });
    })
    .catch((err) => {
      console.error(err);
      res.send({
        error: true,
        msg: "서버 에러",
      });
    });
};

const getBoardList = async (req, res) => {
  const board = await Board.find();
  res.send(board);
};

// 게시판별 게시글을 가져오는 라우트
const getBoardSlug = async (req, res) => {
  const { slug } = req.params;
  const { lastIndex } = req.query; // 무한 스크롤 구현시 사용할 부분

  const board = await Board.findOne({ slug });
  if (!board._id) {
    return res.send({
      article: [],
      error: true,
      msg: "존재하지 않는 게시판",
    });
  }

  const findOption = {
    board: board._id,
  };

  if (lastIndex !== "0") {
    findOption._id = { $lt: lastIndex };
  }

  const article = await Article.find(findOption)
    .sort({ _id: -1 })
    .limit(6)
    .populate({
      path: "author",
      populate: { path: "company" },
    });

  const formatedArtilce = article.map((v) => {
    return {
      ...v._doc,
      author: {
        ...v._doc.author._doc,
        nickname: `${v._doc.author._doc.nickname[0]}${"*".repeat(
          v._doc.author._doc.nickname.length - 1
        )}`,
      },
    };
  });
  res.send({ article: formatedArtilce, error: false, msg: "성공" });
};

// 관리자: 게시판 추가
const postBoardCreate = async (req, res) => {
  const { title, slug } = req.body;
  const newBoard = await Board({
    title,
    slug,
  }).save();

  res.send(newBoard._id ? true : false);
};

router.get("/main", getBoard);
router.get("/list", getBoardList);
router.get("/:slug", getBoardSlug);
router.post("/create", postBoardCreate);
//router.get("/main", getPostsMain);

module.exports = router;
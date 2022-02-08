import express from "express";
import { getPostsMain, postPosts } from "../controllers/posts.js";
let router = express.Router();

router.post("/", postPosts);
router.get("/main", getPostsMain);

export default router;

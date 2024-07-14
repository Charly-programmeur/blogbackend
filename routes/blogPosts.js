import express from "express";
import {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  updateSingleBlogPost,
  likeBlogPost,
  removeSingleBlogPost
} from "../controllers/blogs.js";

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSingleBlogPost);
router.patch("/:id/like", likeBlogPost);
router.delete("/:id", removeSingleBlogPost);

export default router;

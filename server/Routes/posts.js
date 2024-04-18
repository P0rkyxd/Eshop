import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router(); // Use "Router()" instead of "router()"

// read
router.get("/", verifyToken, getFeedPosts); // Use "getFeedPosts" instead of "getFeedPost"
router.get("/:userId/posts", verifyToken, getUserPosts);

// update
router.patch("/:id/like", verifyToken, likePost);
export default router;

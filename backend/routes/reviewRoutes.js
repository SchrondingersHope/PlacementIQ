import express from "express";
import { getAllReviews, getCompanyReviews, getInterviewReviews, upDownVote, postNewReview } from "../controllers/reviews.js";
import { verifyToken } from "../middleware/authriz.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getAllReviews);
router.get("/:companyId/reviews", verifyToken, getCompanyReviews);
router.get("/:companyId/interReviews", verifyToken, getInterviewReviews);

/* WRITE */
router.post("/post", verifyToken, postNewReview);

/* UPDATE */
router.patch("/:id/upvote", verifyToken, upDownVote);
// router.patch("/:id/downvote", verifyToken, downvote);

export default router;
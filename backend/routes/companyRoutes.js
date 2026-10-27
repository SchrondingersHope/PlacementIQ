import express from "express";
import { getCompany, getAllCompanies,addRole } from "../controllers/companies.js";
import { verifyToken } from "../middleware/authriz.js";
// import { verify } from "jsonwebtoken";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getAllCompanies);
router.get("/:userID/:id", verifyToken, getCompany);
// router.get("/:companyId/reviews", verifyToken, getInterviewReviews);

/* UPDATE */
router.patch("/:companyID/addRole",verifyToken, addRole);
// router.patch("/:id/upvote", verifyToken, upDownVote);

export default router;
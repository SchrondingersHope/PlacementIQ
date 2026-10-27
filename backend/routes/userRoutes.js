import express from 'express';
// import { login } from '../controllers/auth.js';
import { getUser, getUserTarget } from '../controllers/users.js';
import { getRecs } from '../controllers/match.js';
import { verifyToken } from '../middleware/authriz.js';

const router = express.Router();

// full route will be /auth/login since we had app.use("/auth", authRoutes)
// router.post("/login", login);
router.get("/:id", getUser);
router.get("/:id/recs",verifyToken, getRecs);
router.get("/:id/target", verifyToken, getUserTarget);

export default router;
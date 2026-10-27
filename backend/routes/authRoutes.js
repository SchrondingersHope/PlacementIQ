import express from 'express';
import { login } from '../controllers/auth.js';

const router = express.Router();

// full route will be /auth/login since we had app.use("/auth", authRoutes)
router.post("/login", login);

export default router;
import { Router } from 'express'
import { auth, loginApi, SignUpApi } from '../controllers/auth.controllers.js';
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


const router = Router();

router.get("/auth/verify", auth)
router.post("/api/signup", SignUpApi)
router.post("/api/login", loginApi)


export const authRouters = router
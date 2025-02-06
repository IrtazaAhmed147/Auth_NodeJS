import { Router } from 'express'
import { loginApi, SignUpApi } from '../controllers/auth.controllers.js';



const router = Router();

router.post("/api/signup", SignUpApi)
router.post("/api/login", loginApi)

export const authRouters = router
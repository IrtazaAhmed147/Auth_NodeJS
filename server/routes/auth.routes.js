import { Router } from 'express'
import { SignUpApi } from '../controllers/auth.controllers.js';



const router = Router();

router.post("/api/signup", SignUpApi)

export const authRouters = router
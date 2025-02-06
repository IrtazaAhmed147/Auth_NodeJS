import { authentication, registerUser } from "../models/auth.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const auth = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Token is not provided" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        res.json({ message: "User authenticated", user: decoded })
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

export const SignUpApi = async (req, res) => {
    const { userName, email, password } = req.body;
    const existingUser = await authentication(email)
    if (existingUser) {
        return res.json({status: 400, message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser ={
        userName,
        email,
        password: hashPassword,
    }

    await registerUser(newUser)

    return res.json({
        status: "ok",
        message: "user registered successfully"
    })
}



export const loginApi = async (req, res) => {
    const { email, password } = req.body;
    const user = await authentication(email)
    if (!user) {
        return res.json({status: 400, message: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    
    if (!isMatch) {
        return res.json({status: 400, message: "Invalid credentials!" });
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "300s"})


    return res.json({
        status: "ok",
        message: "login successful",
        token
    })
}
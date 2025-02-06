import { authentication, registerUser } from "../models/auth.models.js";
import bcrypt from "bcryptjs"

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



    return res.json({
        status: "ok",
        message: "login successful"
    })
}
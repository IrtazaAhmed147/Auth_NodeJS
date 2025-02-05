import { registerUser } from "../models/auth.models.js";

export const SignUpApi = async (req, res) => {

    await registerUser(req.body)
    
    
    console.log(req.body);
    return res.json({
        status: "ok",
        message: "it is working"
    })
}
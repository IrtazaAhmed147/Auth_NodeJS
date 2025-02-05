import {z} from "zod"

const signupSchema = z.object({
    userName: z.string().min(3, "Username must be atleast 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string(),
}).refine((data)=> data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],

});


export default signupSchema
import {z} from "zod"

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be atleast 6 characters")
})

export default loginSchema
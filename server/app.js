import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors";
import { authRouters } from "./routes/auth.routes.js";


dotenv.config();

const app = express()
const port = process.env.PORT

// it is middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }))


app.use(authRouters)


app.listen(port, () => {
    console.log("server is running at " + port);
})

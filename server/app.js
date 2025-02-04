import express from "express"
import dotenv from "dotenv"
import cors from "cors";


dotenv.config();

const app = express()
const port = process.env.PORT
console.log(port);

// it is middleware
app.use(cors());

app.get("/api/signup", (req, res)=> {
   return res.json({
        status: "ok",
        message: "it is working"
    })
})
app.listen(port, ()=> {
    console.log("server is running at " + port);
})

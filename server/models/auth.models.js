import { dbClient } from "../config/db-client.js";
import { env } from "../config/env.js";


const db = dbClient.db(env.MONGODB_DATABASE_NAME)
const authCollection = db.collection("users")


export const registerUser = async(userData)=> {
    return authCollection.insertOne(userData)
}


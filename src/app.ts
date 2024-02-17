import express from 'express'
import { connectToDatabase } from "./services/database.service"
import { mainRouter } from './routes/main.router'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

connectToDatabase()
    .then(() => {
        app.use(mainRouter)
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error)
        process.exit();
    })

export default app
import express from 'express'
import { connectToDatabase } from "./services/database.service"
import { mainRouter } from './routes/main.router'
import cors from 'cors'

async function makeApp() {
    const app = express()

    app.use(express.json())
    app.use(cors())
    
    await connectToDatabase()
        .then(() => {
            app.use(mainRouter)
        })
        .catch((error: Error) => {
            console.error("Database connection failed", error)
            process.exit();
        })
    
    return app
}

export default makeApp
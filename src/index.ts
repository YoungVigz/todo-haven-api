import express from 'express'
import { connectToDatabase } from "./services/database.service"
import { mainRouter } from './routes/main.router'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

connectToDatabase()
    .then(() => {
        app.use(mainRouter)
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error)
        process.exit();
    })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
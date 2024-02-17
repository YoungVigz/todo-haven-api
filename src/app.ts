import express from 'express'
import { mainRouter } from './routes/main.router'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(mainRouter)

export default app
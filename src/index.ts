import app from './app'
import { connectToDatabase } from "./services/database.service"

const port = process.env.PORT || 4000

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })    
}).catch((error: Error) => {
        console.error("Database connection failed", error)
        process.exit();
})


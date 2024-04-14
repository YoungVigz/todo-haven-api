import mongoose from "mongoose"

export interface ProjectInput {
    name: string
}

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    user_id: {
        type: String,
        required: true
    }
})

export default mongoose.model("Projects", ProjectSchema)
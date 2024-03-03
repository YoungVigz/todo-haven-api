import mongoose from "mongoose"

export interface TodoInput {
    content: string
}

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    project_id: {
        type: String,
        required: true
    },
    list_id: {
        type: String,
        required: true
    }
})

export default mongoose.model("todos", TodoSchema)
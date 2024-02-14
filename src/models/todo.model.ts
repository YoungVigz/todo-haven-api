import mongoose from "mongoose"

export interface TodoInput {
    title: string
}

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    }
})

export default mongoose.model("todos", TodoSchema)
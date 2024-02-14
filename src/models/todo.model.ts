import mongoose from "mongoose"

export interface TodoInput {
    title: string
}

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
})

export default mongoose.model("todos", TodoSchema)
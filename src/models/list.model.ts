import mongoose from "mongoose"

export interface ListInput {
    name: string
}

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    project_id: {
        type: String,
        required: true
    }
})

export default mongoose.model("Lists", listSchema)
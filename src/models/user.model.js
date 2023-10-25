import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true // eliminar espacios 
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true // solo puede ser un email
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)
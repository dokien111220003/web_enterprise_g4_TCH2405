const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: Boolean, default: 'student', required: true },
        faculty: { type: String, required: false },
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: {type: String}
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
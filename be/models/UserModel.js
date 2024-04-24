const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate');
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'student', required: true },
        faculty: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Faculty',
            autopopulate: { select: 'name' }  // Tự động điền chỉ với trường 'name'
        },
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: {type: String}
    },
    {
        timestamps: true
    }
);

userSchema.plugin(autopopulate);
const User = mongoose.model("User", userSchema);
module.exports = User;
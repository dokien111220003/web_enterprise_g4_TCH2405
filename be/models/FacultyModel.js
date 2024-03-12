const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);
const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;

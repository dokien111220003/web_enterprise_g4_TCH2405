const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        status: {type: Boolean, default: fault},
        faculty: { type: mongoose.Schema.Types.ObjectId, ref:'Faculty', required: true },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

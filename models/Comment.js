const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const model = mongoose.model('Comment', commentSchema);

module.exports = model;
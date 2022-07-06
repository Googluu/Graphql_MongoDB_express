const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true    
    }
}, {
    timestamps: true
});

const model = mongoose.model('Post', postSchema);

module.exports = model;
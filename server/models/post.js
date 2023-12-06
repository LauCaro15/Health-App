const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, require: true  },
    images: [{ type: String, require: true }],
    videos: [{ type: String, require: true }],
    arrival_order: [{ type: String, require: true}],
    active: { type: Boolean, require: true, default: false },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
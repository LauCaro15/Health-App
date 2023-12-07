const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, require: true  },
    description: { type: String, require: true  },
    images: [{ type: String }],
    /* videos: [{ type: String, require: true }], */
    /* arrival_order: [{ type: String, require: true}], */
    active: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", postSchema);

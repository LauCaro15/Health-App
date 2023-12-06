const Post = require('../models/post');

const getAll = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json(posts);
    }
}

const getOne = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(post);
    }
}

const createPost = async (req, res) => {
    const { title, images, videos, arrival_order, active } = req.body;

    if (title != null) {

        const new_post = await Post({
            title,
            images,
            videos,
            arrival_order,
            active,
        });

        console.log("Post creado:" + new_post);

        const postDB = await new_post.save();
        res.status(201).json(postDB)
    } else {
        console.log("Faltan campos requeridos");
    }
};

module.exports = {
    getAll,
    getOne,
    createPost
}
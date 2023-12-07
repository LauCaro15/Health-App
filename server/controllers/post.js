const { express } = require('express');
const Post = require('../models/post');

const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const imagesPaths = [];

        // Verifica si req.files es un arreglo antes de usar map
        if (Array.isArray(req.files)) {
            req.files.forEach(file => {
                imagesPaths.push(file.path.replace(/\\/g, "/"));
            });
        } else {
            // Si solo hay una imagen, asegúrate de que sea un arreglo
            imagesPaths.push(req.files.path.replace(/\\/g, "/"));
        }

        const postData = {
            title,
            description,
            images: imagesPaths, // Guardamos las rutas de las imágenes en un arreglo
        }

        const newPost = new Post(postData);
        const savedPost = await newPost.save();

        console.log(savedPost);
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAll,
    getOne,
    createPost
}

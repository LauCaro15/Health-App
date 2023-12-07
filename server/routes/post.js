const express = require('express');
const router = express.Router();
const multer = require('multer');

const postController = require('../controllers/post');

// Para manejo de imágenes
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: "uploads/posts",
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
}).array('images', 10);

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/", upload, postController.createPost);

module.exports = router;

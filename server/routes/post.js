const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/", postController.createPost);

module.exports = router;
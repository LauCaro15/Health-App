const express = require('express');
const router = express.Router();

const md_auth  = require('../middlewares/authenticated');
const clientController = require('../controllers/client');

router.post("/register" , clientController.register );
router.post("/login" , clientController.login );
router.get("/" , clientController.getAll );

router.put("/:id/addLike" , clientController.addLike );
router.put("/:id/addCollection" , clientController.addCollection );

module.exports = router;
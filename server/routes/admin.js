const express = require('express');
const router = express.Router();

// const md_auth  = require('../middlewares/authenticated');
const adminController = require('../controllers/admin');


router.post("/register" , adminController.register );
router.post("/login" , adminController.login );
router.get("/" , adminController.getAll );

module.exports = router;
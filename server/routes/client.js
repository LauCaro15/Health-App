const express = require('express');
const router = express.Router();

const md_auth  = require('../middlewares/authenticated');
const clientController = require('../controllers/client');

router.post("/register" , clientController.register );
router.post("/login" , clientController.login );
router.get("/" , clientController.getAll );

router.get("get-me" , [md_auth.ensureAuth] , clientController.getMe );

module.exports = router;
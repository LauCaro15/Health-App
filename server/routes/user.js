const express = require('express');
const router = express.Router();

const md_auth  = require('../middlewares/authenticated');
const userController = require('../controllers/user');

router.post("/register" , userController.register );
router.post("/login" , userController.login );
router.get("/" , userController.getAllUsers );
router.get("/:userId" , userController.getUserById );

router.get("get-me" , [md_auth.ensureAuth] , userController.getMe );
router.patch("/:userId" , userController.updateUser );
router.delete("/:userId", userController.deleteUser );

module.exports = router;
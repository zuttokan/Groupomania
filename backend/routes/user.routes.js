const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const multer = require('multer');
const upload = multer();

//auth
router.post('/signup', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

//user display
router.get('/', userController.getAllUsers);
//router.get('/:id', userController.userInfo);
//router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

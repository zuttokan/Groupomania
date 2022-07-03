const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');

router.post('/', auth, postCtrl.createPost);
router.put('/:id', auth, postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);
router.get('/', auth, postCtrl.getAllPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/like/:id', auth, postCtrl.likePost);

module.exports = router;

//router.get("/image/:id", auth, postCtrl.getOneImage);

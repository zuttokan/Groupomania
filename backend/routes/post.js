const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');

router.put('/update', auth, multer, postCtrl.modifyPost);
router.post('/create', auth, multer, postCtrl.createPost);
router.delete('/delete', postCtrl.deletePost);
router.get('/', auth, postCtrl.allPost);

module.exports = router;

const post = require('../models/post');
const fs = require('fs');
const jwt = require('jsonwebtoken');

// Add a post
exports.createPost = (req, res, next) => {
  console.log('toto');
  const postArticle = JSON.parse(req.body);
  delete postArticle._id;
  const post = new post({
    ...postArticle,
    username: req.body.username,
    text: req.body.text,
    picture: req.body.picture,
    // imageUrl: `${req.protocol}://${req.get('host')}/images/${
    //   req.file.filename
    // }`,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: 'registered post !' }))
    .catch((error) => res.status(400).json({ error }));
};

// accesses a post
exports.getOnePost = (req, res, next) => {
  post
    .findOne({
      _id: req.params.id,
    })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

// Modify a post
exports.updatePost = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;

  const postArticle = req.file
    ? {
        ...JSON.parse(req.body.post),
        username: req.body.username,
        texte: req.body.texte,
        picture: req.body.picture,
        // imageUrl: `${req.protocol}://${req.get('host')}/images/${
        //   req.file.filename
        // }`,
      }
    : { ...req.body };

  post
    .findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId == userId) {
        post
          .updateOne(
            { _id: req.params.id },
            { ...postArticle, _id: req.params.id }
          )
          .then(() => res.status(200).json({ message: 'Modify post !' }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        res.status(403).json({ message: 'Forbidden request !' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// remove a post
exports.deletePost = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;

  post
    .findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId == userId) {
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          post
            .deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'deleted Post !' }))
            .catch((error) => res.status(400).json({ error }));
        });
      } else {
        res.status(403).json({ message: 'Forbidden request !' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// accesses all post
exports.getAllPost = (req, res, next) => {
  post
    .find()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//like and dislike
exports.likePost = (req, res, next) => {
  const like = req.body.like;
  if (like === 1) {
    // button like
    post
      .updateOne(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
          $push: { usersLiked: req.body.userId },
          _id: req.params.id,
        }
      )
      .then(() => res.status(200).json({ message: 'You like this post' }))
      .catch((error) => res.status(400).json({ error }));
  } else if (like === -1) {
    // button dislike
    post
      .updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: req.body.userId },
          _id: req.params.id,
        }
      )
      .then(() => res.status(200).json({ message: 'You don’t like this post' }))
      .catch((error) => res.status(400).json({ error }));
  } else {
    // cancel the button like or dislike
    post
      .findOne({ _id: req.params.id })
      .then((post) => {
        if (post.usersLiked.indexOf(req.body.userId) !== -1) {
          post
            .updateOne(
              { _id: req.params.id },
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.userId },
                _id: req.params.id,
              }
            )
            .then(() =>
              res.status(200).json({ message: 'You no longer like this post' })
            )
            .catch((error) => res.status(400).json({ error }));
        } else if (post.usersDisliked.indexOf(req.body.userId) !== -1) {
          post
            .updateOne(
              { _id: req.params.id },
              {
                $inc: { dislikes: -1 },
                $pull: { usersDisliked: req.body.userId },
                _id: req.params.id,
              }
            )
            .then(() =>
              res.status(200).json({
                message: 'You may like this post again',
              })
            )
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
  }
};

/// call mongoose for creating a schema
const mongoose = require('mongoose');
const mongooseErrors = require('mongoose-errors');
// post schema
const postSchema = mongoose.Schema({
  //pseudo: { type: String, required: true },
  photo: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  usersDisliked: [{ type: String }],
});

postSchema.plugin(mongooseErrors);
module.exports = mongoose.model('post', postSchema);

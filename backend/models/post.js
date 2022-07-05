/// call mongoose for creating a schema
const mongoose = require('mongoose');
const mongooseErrors = require('mongoose-errors');
// post schema
const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  picture: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  usersDisliked: [{ type: String }],
  //likers: { type: [String],required: true,},
  //{timestamps: true,}
});

postSchema.plugin(mongooseErrors);
module.exports = mongoose.model('post', postSchema);

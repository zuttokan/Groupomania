const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    picture: {
      type: String,
    },

    likers: {
      type: [String],
      required: true,
    },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);

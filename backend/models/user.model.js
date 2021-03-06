const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: false,
      minLength: 3,
      maxLength: 55,
      unique: false,
      trim: true,
    },
    username: {
      type: String,
      required: false,
      minLength: 3,
      maxLength: 55,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      //unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },

    likes: {
      type: [String],
    },
    admin: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  }
);

//play function before save into display: 'block'
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  console.log('SALT ', salt);
  this.password = await bcrypt.hash(this.password, salt);
  console.log('this.password ', this.password);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  console.log('USER', user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    console.log('AUTH', auth);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

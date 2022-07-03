// call mongoose for creating a schema
const mongoose = require('mongoose');
// validation for unique fields in a Mongoose schema
const uniqueValidator = require('mongoose-unique-validator');
const mongooseErrors = require('mongoose-errors');
const { isEmail } = require('validator');
// User schema
const userSchema = mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   minLength: 3,
    //   maxLength: 55,
    //   unique: true,
    //   trim: true,
    // },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      unique: true,
      trim: true,
    },
    password: { type: String, required: true },
    // Picture: {
    //   type: String,
    //   default: './images/profil/defaut-profil.jpg',
    // },
    //admin: { type: Boolean, default: false },
  }
  //{ timestamps: true }
);

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseErrors);

module.exports = mongoose.model('User', userSchema);

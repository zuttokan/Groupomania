const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

const dotenv = require('dotenv');
dotenv.config();
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//inscription
module.exports.signUp = async (req, res) => {
  console.log('req.body', req.body);
  const { pseudo, username, email, password, admin } = req.body;

  console.log({ email });
  console.log({ password });
  try {
    const user = await UserModel.create({
      email: email,
      password: password,
      username: username,
      pseudo: pseudo,
      admin: admin === process.env.admin ? true : false,
    });
    console.log('user', user);

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    console.log('errors', errors);
    res.status(200).send({ errors });
  }
};

//connexion
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', { httpOnly: true, maxAge });
    res.status(200).json({ user: token });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

//déconnexion
module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

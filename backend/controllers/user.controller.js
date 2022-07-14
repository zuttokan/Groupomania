const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

//all users
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select('-password');
  res.status(200).json(users);
};

//delete a user
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow : ' + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

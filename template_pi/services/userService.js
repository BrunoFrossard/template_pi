const userModel = require('../models/userModel');

exports.getAllUsers = (callback) => {
  userModel.getAllUsers(callback);
};

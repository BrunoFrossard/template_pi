const userService = require('../services/userService');

exports.getAllUsers = (req, res) => {
  userService.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(users);
  });
};

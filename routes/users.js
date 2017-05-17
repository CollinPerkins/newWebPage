var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function (err, users) {
    if (err) return err;
    res.send(users);
  });
});

module.exports = router;

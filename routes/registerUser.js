var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });

  user.save(function(err) {
    if (err) {
      if(err.code === 11000){
        return res.send('That email already exists!')
      } else {
        return res.send(err);
      }
    };
    res.send(user);
  });
});

module.exports = router;

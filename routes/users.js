var express = require('express');
var router = express.Router();
var userService = require('../services/users');
router.post('/login', function (req, res, next) {
  res.send('login');
});

router.post('/regedit', function (req, res, next) {
  userService.regeditCustomerUser(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    res.send(JSON.stringify({ code: 10000, message: '请登录邮箱激活您的账户！', data: req.body.email }));
  });
});

router.post('/change_password', function (req, res, next) {
  res.send('change password');
});

router.post('/update', function (req, res, next) {
  res.send('update');
});

module.exports = router;

var emailConfig = require('../config/index').email;
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(smtpTransport(emailConfig.options));

var send = function (toEmail, subject, body, cb) {
  transport.sendMail({
    from: emailConfig.form, to: toEmail, subject, html: body
  }, cb);
};

module.exports = { send };
var sms = require('./sms');
var safe = require('./safe');
var email = require('./email');
/**
 * 解析主题
 * @param {String} topic 
 */
var parseTopic = function (topic) {
  var r = topic.split('/');
  return { product: r[2], clientId: r[3], type: r[1] };
};

class BusinessError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

module.exports = {
  parseTopic, sms, safe, email, BusinessError
};


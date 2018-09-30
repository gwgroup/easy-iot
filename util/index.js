var sms = require('./sms');
var safe = require('./safe');
/**
 * 解析主题
 * @param {String} topic 
 */
var parseTopic = function (topic) {
  var r = topic.split('/');
  return { product: r[2], clientId: r[3], type: r[1] };
};
module.exports = {
  parseTopic, sms, safe
};


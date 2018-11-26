var ModelToken = require('../models/index').modelToken;
const tokenExpires = require('../config/index').tokenExpires;
/**
 * 校验token
 * @param {String} code 
 * @param {Function} cb 
 */
var checkToken = function (code, cb) {
  ModelToken.findById(code).populate('users', ['username', 'mobile', 'role', 'email', 'display_name']).exec(cb);
};
/**
 * 延期token
 * @param {String} code 
 */
var delay = function (code) {
  ModelToken.findByIdAndUpdate(code, { expires: new Date(Date.now() + tokenExpires) }, (err, ary) => {
    if (err) {
      console.error('延期TOKEN失败', err);
    }
  });
};
/**
 * 移除TOKEN （无回调，异步）
 * @param {String} code 
 */
var removeToken = function (code) {
  ModelToken.deleteOne({ _id: code }, (err, ary) => {
    if (err) {
      console.error('移除TOKEN失败', err);
    }
  });
}

module.exports = { checkToken, delay,removeToken };
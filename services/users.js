var modelUser = require('../models').modelUsers;
var util = require('../util/index');
var async = require('async');
/**
 * 客户端注册账号
 * @param {Object} param0 
 * @param {Function} cb 
 */
var regeditCustomerUser = function ({ display_name, email, password }, cb) {
  password = util.safe.generatePBKDF2(password);
  async.waterfall([
    (c1) => {
      modelUser({ display_name, password: password, email: email }).save(c1);
    },
    (doc, c1) => {
      let body = __buildActiveCustomerHtml(doc.display_name, doc._id);
      util.email.send(email, "欢迎注册小龙鱼物联平台", body, c1);
    }
  ], cb);
};

var __buildActiveCustomerHtml = function (displayName, id) {
  return `<h2>欢迎加入小龙鱼物联网平台</h2><span>请您在5个工作日内点击下方链接激活账户！</span><p><a href="https://iot.qbcnz.cn/customer/active/${id}">激活账户（${displayName}）</a></p>`;
};

module.exports = { regeditCustomerUser };
var QcloudSms = require("qcloudsms_js");
var smsConfig = require('../config/index').sms;
// 短信应用SDK AppID
var appid = smsConfig.appid;
// 短信应用SDK AppKey
var appkey = smsConfig.appkey;
// 签名
var smsSign = smsConfig.smsSign;
var qcloudsms = QcloudSms(appid, appkey);
var ssender = qcloudsms.SmsSingleSender();

/**
 * 发送短信
 * @param {Array} phoneNumbers 电话号码，字符串数组
 * @param {Number} templateId 模板ID，可以从templates中查找
 * @param {Array} params 数组参数，严格对应模板中的{1}，{2}，{}...
 * @param {Function} callback 回调函数，形参只有error
 */
var sendSMS = function (phoneNumbers, templateId, params, callback) {
    ssender.sendWithParam(86, phoneNumbers, templateId,
        params, smsSign, '', '', function (err, res, req) {
            if (err) {
                return callback(err);
            }
            if (res.statusCode != 200) {
                return callback(new Error('发送失败'));
            }
            return callback();
        });
};

module.exports = { sendSMS, templates: smsConfig.templates };
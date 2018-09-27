var modelDeviceLog = require('../models').modelDeviceLog;

/**
 * 插入设备日志
 * @param {String} productId 
 * @param {String} deviceId 
 * @param {String} topicType 
 * @param {Object} log 
 */
var insertDeviceLog = function (productId, deviceId, topicType, log) {
  modelDeviceLog.insertMany({ product: productId, device: deviceId, "topic_type": topicType, log: log },function(err,doc){
    if(err){
      console.error(err);
    }
  });
};


module.exports = { insertDeviceLog };
var modelDevice = require('../models').modelDevice;

/**
 * 根据客户端ID查找设备
 * @param {String} clientId 
 */
var findByClientId = function (clientId) {
  modelDevice.findOne({ client_id: clientId }).populate('product').exec(function (err,result) {
    if(err){
      console.error(err);
    }else{
      console.log(result);
    }
  });
};

/**
 * 更新设备在线
 * @param {String} clientId 
 */
var online = function (clientId) {
  modelDevice.findOneAndUpdate({ client_id: clientId }, { status: 1 }, function (err, doc) {
    if (err) {
      console.error('online', clientId, err);
    } else {
      console.info('online', clientId);
    }
  });
};

/**
 * 更新设备离线
 * @param {String} clientId 
 */
var offline = function (clientId) {
  modelDevice.findOneAndUpdate({ client_id: clientId }, { status: 0 }, function (err, doc) {
    if (err) {
      console.error('offline', clientId, err);
    } else {
      console.info('offline', clientId);
    }
  });
};

module.exports = { online, offline };
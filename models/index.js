var mongoConfig = require('../config/index').mongodb;
const mongoose = require('mongoose'),
  schemaDevice = require('./schema-device'),
  schemaProduct = require('./schema-product'),
  schemaDeviceLog = require('./schema-device-log');

var modelDevice = mongoose.model('device', schemaDevice, 'device');
var modelDeviceLog = mongoose.model('device_log', schemaDeviceLog, 'device_log');
var modelProduct = mongoose.model('product', schemaProduct, 'product');
/**
 * 初始化Mongoose连接
 */
var initConnection = function () {
  mongoose.connect(mongoConfig.url, mongoConfig.options);
  mongoose.set('useFindAndModify', false);
};

module.exports = { modelDevice, modelProduct, modelDeviceLog,initConnection};
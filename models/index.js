var mongoConfig = require('../config/index').mongodb;
const mongoose = require('mongoose'),
  schemaDevice = require('./schema-device'),
  schemaProduct = require('./schema-product'),
  schemaDeviceLog = require('./schema-device-log'),
  schemaMqttUsers = require('./schema-mqtt-users');
schemaUsers = require('./schema-users');
schemaRole = require('./schema-role');
var modelDevice = mongoose.model('device', schemaDevice, 'device');
var modelDeviceLog = mongoose.model('device_log', schemaDeviceLog, 'device_log');
var modelProduct = mongoose.model('product', schemaProduct, 'product');
var modelMqttUsers = mongoose.model('mqtt_users', schemaMqttUsers, 'mqtt_users');
var modelUsers = mongoose.model('users', schemaUsers, 'users');
var modelRole = mongoose.model('role', schemaRole, 'role');



/**
 * 初始化Mongoose连接
 */
var initConnection = function () {
  mongoose.connect(mongoConfig.url, mongoConfig.options);
  mongoose.set('useFindAndModify', false);
  return this;
};

module.exports = { modelDevice, modelProduct, modelDeviceLog, modelMqttUsers, modelUsers, modelRole, initConnection };
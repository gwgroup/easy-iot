const mongoConfig = require('../config/index').mongodb,
  mongoose = require('mongoose'),
  schemaDevice = require('./schema-device'),
  schemaProduct = require('./schema-product'),
  schemaDeviceLog = require('./schema-device-log'),
  schemaMqttUsers = require('./schema-mqtt-users'),
  schemaUsers = require('./schema-users'),
  schemaRole = require('./schema-role');
schemaToken = require('./schema-token');
var modelDevice = mongoose.model('device', schemaDevice, 'device'),
  modelDeviceLog = mongoose.model('device_log', schemaDeviceLog, 'device_log'),
  modelProduct = mongoose.model('product', schemaProduct, 'product'),
  modelMqttUsers = mongoose.model('mqtt_users', schemaMqttUsers, 'mqtt_users'),
  modelUsers = mongoose.model('users', schemaUsers, 'users'),
  modelRole = mongoose.model('role', schemaRole, 'role'),
  modelToken = mongoose.model('token', schemaToken, 'token');

/**
 * 初始化Mongoose连接
 */
var initConnection = function () {
  mongoose.connect(mongoConfig.url, mongoConfig.options);
  mongoose.set('useFindAndModify', false);
  return this;
};

module.exports = { modelDevice, modelProduct, modelDeviceLog, modelMqttUsers, modelUsers, modelRole, initConnection, modelToken };
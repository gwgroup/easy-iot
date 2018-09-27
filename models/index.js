const mongoose = require('mongoose'),
  schemaDevice = require('./schema-device'),
  schemaProduct = require('./schema-product'),
  schemaDeviceLog = require('./schema-device-log');

var modelDevice = mongoose.model('device', schemaDevice,'device');
var modelDeviceLog = mongoose.model('device_log', schemaDeviceLog,'device_log');
var modelProduct = mongoose.model('product', schemaProduct,'product');

module.exports = { modelDevice, modelProduct, modelDeviceLog };
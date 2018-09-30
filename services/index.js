var serviceDeviceLog = require('./device-log');
var serviceDevice = require('./device');
var serviceMqttUser = require('./mqtt-user');
var serviceProduct = require('./product');
module.exports = { device: serviceDevice, deviceLog: serviceDeviceLog, product: serviceProduct, mqttUser: serviceMqttUser };
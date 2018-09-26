const mongoose = require('mongoose');
var SchemaDevice = require('./schema-device');
var SchemaProduct = require('./schema-product');
var modelDevice = mongoose.model('device', SchemaDevice);
var modelProduct = mongoose.model('product', SchemaProduct);
module.exports = { modelDevice, modelProduct };
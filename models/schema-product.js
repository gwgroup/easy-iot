const Schema = require('mongoose').Schema;
var productSchema = new Schema({
  name: String,
  desc: String,
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});
module.exports = productSchema;
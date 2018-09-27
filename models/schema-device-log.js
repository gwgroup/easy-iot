const Schema = require('mongoose').Schema;
var deviceLogSchema = new Schema({
  product: { type: String, ref: 'product' },
  device: { type: String, ref: 'device' },
  topic_type: String,
  log: Schema.Types.Mixed,
  create_time: { type: Date, default: Date.now }
});
module.exports = deviceLogSchema;
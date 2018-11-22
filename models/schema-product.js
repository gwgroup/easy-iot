const Schema = require('mongoose').Schema;
var productSchema = new Schema({
  _id: String,
  name: String,
  desc: String,
  customer: { type: Schema.Types.ObjectId, ref: 'users' },
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});
module.exports = productSchema;
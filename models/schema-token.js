const Schema = require('mongoose').Schema;

var tokenSchema = new Schema({
  _id: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  expires: { type: Date },
  create_time: { type: Date, default: Date.now }
});

module.exports=tokenSchema;
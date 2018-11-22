const Schema = require('mongoose').Schema;

var usersSchema = new Schema({
  mobile: { type: String },
  username: { type: String, unique: true },
  display_name: String,
  password: String,
  role: { type: String, ref: 'role' },
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});

module.exports = usersSchema;
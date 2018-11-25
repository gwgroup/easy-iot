const Schema = require('mongoose').Schema;

var usersSchema = new Schema({
  mobile: { type: String },
  username: { type: String },
  email: { type: String, unique: true, required: false },
  display_name: String,
  password: String,
  role: { type: String, ref: 'role' },
  active: { type: Boolean, default: false },
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});

module.exports = usersSchema;
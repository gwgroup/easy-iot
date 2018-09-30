const Schema = require('mongoose').Schema;
var mqttUsersSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
    superuser: { type: Boolean, default: false },
    type: { type: Number, default: 2 },
    product: { type: String, ref: 'product' },
    topics: { type: Schema.Types.Mixed },
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now }
});
module.exports = mqttUsersSchema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var deviceSchema = new Schema({
    product_id: String,
    client_id: String,
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now }
});
var model = mongoose.model('device', deviceSchema);
module.exports = model;
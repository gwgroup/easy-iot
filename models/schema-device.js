const Schema = require('mongoose').Schema;
var deviceSchema = new Schema({
    _id:String,
    product:  { type: String, ref: 'product' },
    status:{type:Number,default:-1},
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now }
});
module.exports = deviceSchema;
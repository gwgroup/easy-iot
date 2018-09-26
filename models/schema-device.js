const Schema = require('mongoose').Schema;
var deviceSchema = new Schema({
    product:  { type: Schema.Types.ObjectId, ref: 'product' },
    client_id:String,
    status:{type:Number,default:-1},
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now }
});
module.exports = deviceSchema;
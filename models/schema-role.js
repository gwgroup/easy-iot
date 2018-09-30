const Schema = require('mongoose').Schema;

var roleSchema = new Schema({
  _id: { type: String },
  name: String,
  menu:{type:Schema.Types.Mixed},
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});

/*
{
    "_id" :"admin",
    "name" : "管理员",
    "create_time" : null,
    "update_time" : null,
    "menu" : {
        "name" : "主页",
        "path" : "/",
        "child" : [ 
            {
                "name" : "客户认证审核",
                "path" : "/audit"
            }, 
            {
                "name" : "设备查看",
                "path" : "/device"
            }, 
            {
                "name" : "产品查看",
                "path" : "/product"
            }, 
            {
                "name" : "监控",
                "path" : "/monitor"
            }
        ]
    }
}

*/


module.exports = roleSchema;
require('../models').initConnection();
var async = require('async');
var util=require('../util');
var model = require('../models');

async.waterfall([
    function (cb) {
        console.log('移除所有用户');
        model.modelMqttUsers.deleteMany({}, function(err,doc){
            cb(err,doc);
        });
    },
    function (q, cb) {
        console.log('添加 admin');
        model.modelMqttUsers({
            username: 'admin',
            password: util.safe.generatePBKDF2('123456'),
            superuser: true,
            type: 0,
            product: null,
            topics: null
        }).save(cb);
    },
    function (q, cb) {
        console.log('添加 fish');
        model.modelMqttUsers({
            username: 'fish',
            password: util.safe.generatePBKDF2('123456'),
            superuser: false,
            type: 1,
            product: 'fish',
            topics: {
                "device/get/fish/#": "rw",
                "device/set/fish/#": "rw",
                "device/lwt/fish/#": "rw"
            }
        }).save(cb);
    },
    function (q, cb) {
        console.log('添加 fish_client');
        model.modelMqttUsers({
            username: 'fish_client',
            password: util.safe.generatePBKDF2('123456'),
            superuser: false,
            type: 2,
            product: 'fish',
            topics: {
                "device/get/fish/%c": "r",
                "device/set/fish/%c": "w",
                "device/lwt/fish/%c": "w"
            }
        }).save(cb);
    }
], function (err, results) {
    if(err){
        console.error(err);
    }
    console.log("用户初始化完成...");
    process.exit();
});

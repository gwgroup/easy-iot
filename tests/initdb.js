require('../models').initConnection();
var async = require('async');
var util = require('../util');
var model = require('../models');

async.waterfall([
    function (cb) {
        console.log('移除所有MQTT用户');
        model.modelMqttUsers.deleteMany({}, function (err, doc) {
            cb(err, doc);
        });
    },
    function (q, cb) {
        console.log('添加MQTT用户 admin');
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
        console.log('添加MQTT用户 fish');
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
        console.log('添加MQTT用户 fish_client');
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
    },
    function (q, cb) {
        console.log('移除所有角色');
        model.modelRole.deleteMany({}, function (err, doc) {
            cb(err, doc);
        });
    },
    function (q, cb) {
        console.log('添加 admin 角色');
        model.modelRole({
            "_id": "admin",
            "name": "管理员",
            "create_time": new Date(),
            "update_time": new Date(),
            "menu": {
                "name": "主页",
                "path": "/",
                "child": [
                    {
                        "name": "客户认证审核",
                        "path": "/audit"
                    },
                    {
                        "name": "设备查看",
                        "path": "/device"
                    },
                    {
                        "name": "产品查看",
                        "path": "/product"
                    },
                    {
                        "name": "监控",
                        "path": "/monitor"
                    }
                ]
            }
        }).save(function (err, doc) {
            cb(err, doc);
        });
    },
    function (q, cb) {
        console.log('移除所有系统用户');
        model.modelUsers.deleteMany({}, function (err, doc) {
            cb(err, doc);
        });
    }, function (q, cb) {
        console.log('添加 18616514687');
        model.modelUsers({
            "mobile": "18616514687",
            "password": "",
            "role": "admin",
            "display_name": "李群朋",
            "create_time": new Date(),
            "update_time": new Date()
        }).save(function (err, doc) {
            cb(err, doc);
        })
    }, function (q, cb) {
        console.log('测试加载输出 18616514687 用户');
        model.modelUsers.findOne({ mobile: '18616514687' }).populate('role').exec(function (err, doc) {
            console.info(doc);
            cb(err, doc);
        });
    }
], function (err, results) {
    if (err) {
        console.error(err);
    }
    console.log("用户初始化完成...");
    process.exit();
});

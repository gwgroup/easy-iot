
var mqtt = require('mqtt'),
    util = require('./util'),
    client = undefined;
//服务组件
var serviceMqttUser = require('./services/mqtt-user'),
    serviceDevice = require('./services/device'),
    serviceProduct = require('./services/product');
//配置
const CONFIG = require('./config/index').mqtt,
    //客户端发送消息主题
    SUB_TOPIC = 'device/set/#',
    //遗嘱主题
    LWT_TOPIC = 'device/lwt/#',
    //在线
    MESSAGE_TYPE_ONLINE = 1001,
    //离线
    MESSAGE_TYPE_OFFLINE = 1002;

/**
 * 运行
 */
var run = function () {
    console.log("监听MQTT");
    client = mqtt.connect(CONFIG.url, CONFIG.options);
    client.on("connect", function () {
        client.subscribe(SUB_TOPIC, { qos: 2, retain: false }, function (err) {
            if (!err) {
                console.log("订阅设备消息");
            }
        });
        client.subscribe(LWT_TOPIC, { qos: 2, retain: false }, function (err) {
            if (!err) {
                console.log("订阅遗嘱消息");
            }
        });
    });
    client.on("message", messageHandler);
    client.on('error', function (err) {
        console.error(err);
    });
};

/**
 * 停止
 */
var stop = function () {
    console.log("断开MQTT连接");
    if (client) {
        client.end();
    }
};

/**
 * 消息处理
 * @param {String} topic 
 * @param {String} message 
 */
var messageHandler = function (topic, message) {
    try {
        let topicObj = util.parseTopic(topic),
            body = JSON.parse(message);
        console.log(topicObj, body);
        switch (body.type) {
            case MESSAGE_TYPE_ONLINE:
                serviceDevice.online(topicObj.clientId);
                break;
            case MESSAGE_TYPE_OFFLINE:
                serviceDevice.offline(topicObj.clientId);
                break;
            default:
                console.warn('未找到要处理的类型');
                break;
        }
    } catch (ex) {
        console.error(ex);
    }
};

module.exports = { run, stop };

var mqtt = require('mqtt'),
    client = undefined;

const CONFIG = require('./config/index').mqtt,
    SUB_TOPIC = 'device/set/#',
    LWT_TOPIC = 'device/lwt/#';

var run = function () {
    console.log("监听MQTT");
    client = mqtt.connect(CONFIG.url, CONFIG.options);
    client.on("connect", function () {
        client.subscribe(SUB_TOPIC, { qos: 2, retain: false });
        client.subscribe(LWT_TOPIC, { qos: 2, retain: false });
    });
    client.on("message", messageHandler);
    client.on('error', function (err) {
        console.error(err);
    });
};

var messageHandler = function (topic, message) {
    console.log(topic, message.toString());
};

var stop = function () {
    console.log("断开MQTT连接");
    if (client) {
        client.end();
    }
};

module.exports = { run, stop };
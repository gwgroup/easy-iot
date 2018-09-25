
/**
 * 更新设备在线
 * @param {String} clientId 
 */
var online = function (clientId) {
  console.log('设备上线', clientId);
};

/**
 * 更新设备离线
 * @param {String} clientId 
 */
var offline = function (clientId) {
  console.log('设备离线', clientId);
};

module.exports = { online, offline };
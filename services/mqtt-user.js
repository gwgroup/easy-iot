var modelMqttUsers=require('../models').modelMqttUsers;
/**
 * 添加MQTT用户
 * @param {Object} doc 
 */
var addMqttUser=function(doc){
  var entity= new modelMqttUsers(doc);
  return entity.save();
};
module.exports={addMqttUser};

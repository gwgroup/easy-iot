var schedule = require('node-schedule');
var tasks = [];

/**
 * 启动调度
 */
var run = function () {
  console.log("初始化调度任务");
  tasks.forEach((item) => {
    schedule.scheduleJob(item.name, item.cron, item.handler);
  });
};

module.exports = { schedule, tasks, run };

// 清除无效数据
tasks.push({
  name: 'CLEAR_DATA',
  cron: '3 * * *',
  handler: function () {
    console.log('CLEAR_DATA','执行清除无效数据任务');
  }
});
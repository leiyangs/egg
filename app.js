// egg提供的入口文件
module.exports = app => {
  app.beforeStart(async () => {
    // 保证应用启动监听端口前数据已经准备好了
    // 开始就执行一次cache任务 后续数据的更新由定时任务自动触发
    await app.runSchedule('updatecache'); // 测试extend注释掉
  })
}
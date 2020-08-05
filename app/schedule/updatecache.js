const { Subscription } = require('egg');

class UpdateCacheSubscription extends Subscription {
  static get schedule() {
    return {
      interval: '1m', // 每隔1分钟执行一次
      type: 'all' // 计划任务将在哪些worker上执行，all指的是在所有worker上执行
    }
  }
  async subscribe() {
    const result = await this.ctx.curl(this.config.cache.url, {
      method: 'get',
      dataType: 'json'
    })
    this.ctx.app.cache = result.data; // app代表应用的实例，每启动一个进程就会创建一个实例
  }
}

module.exports = UpdateCacheSubscription;
const { Service } = require('egg');

module.exports = class NewsService extends Service {
  async list(limit) {
    const {ctx} = this;
    let url = this.config.news.url; // localhost:3000
    let result = await ctx.curl(url, { // curl请求接口方法
      method: 'get',
      data: {limit},
      dataType: 'json'
    })
    return result.data.data;
  }
};
const { Service } = require('egg');

module.exports = class NewsService extends Service {
  async list(limit) {
    const {ctx} = this;
    // 调用远程接口获取数据
    let url = this.config.news.url; // localhost:3000
    let result = await ctx.curl(url, { // curl请求接口方法
      method: 'get',
      data: {limit},
      dataType: 'json'
    })
    return result.data.data;

    // 查询数据库获取数据
    // query是执行SQL语句的意思
    /* let result = await this.app.mysql.query(`SELECT * FROM news LIMIT ${limit}`);
    return result; */
  }
};
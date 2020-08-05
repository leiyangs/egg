const { Controller } = require('egg');
class NewsController extends Controller {
  async index() {
    let { ctx } = this;
    // 使用模板引擎，配置plugin和config.default.js中的config.view
    // -----------------------------------------------------------------
    // const list = [
    //   {
    //     id: '45154322_0',
    //     title: '世界首富早晚是这个人，坐拥7家独角兽公司，估值破数万！',
    //     url: 'http://tech.ifeng.com/a/20180904/45154322_0.shtml',
    //     image:'http://p0.ifengimg.com/pmop/2018/0905/CFFF918B94D561D2A61FB434ADA81589E8972025_size41_w640_h479.jpeg',
    //     createAt:new Date().toLocaleString()
    //   },
    //   {
    //     id: '16491630_0',
    //     title: '支付宝们来了！将来人民币会消失吗？',
    //     url: 'http://finance.ifeng.com/a/20180907/16491630_0.shtml',
    //     image:'http://p0.ifengimg.com/pmop/2018/0907/2AF684C2EC49B7E3C17FCB13D6DEEF08401D4567_size27_w530_h369.jpeg',
    //     createAt:new Date().toLocaleString()
    //   },
    //   {
    //     id: '2451982',
    //     title: '《福布斯》专访贝索斯：无业务边界的亚马逊 令对手生畏的CEO',
    //     url: 'https://www.jiemian.com/article/2451982.html',
    //     image:'https://img1.jiemian.com/101/original/20180907/153628523948814900_a580x330.jpg',
    //     createAt:new Date().toLocaleString()
    //   }
    // ];
    // await ctx.render('news', {list})
    // ---------------------------------------------------------------


    // 作为中间层,调用远程接口
    // 在config.default.js中配置远程接口地址,mock.js模拟远程接口
    // -----------------------------------------------------------------
    let limit = ctx.query ? ctx.query.limit : 5;
    let list = await this.service.news.list(limit);
    list = list instanceof Array ? list : [list]; // 做兼容 mockjs只生成一条数据时list是对象
    await ctx.render('news',{list:list, title:ctx.app.cache ? ctx.app.cache.title : '新闻列表'});
    // -----------------------------------------------------------------
  }
}
module.exports = NewsController;

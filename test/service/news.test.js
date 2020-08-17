const {app,mock,assert} = require('egg-mock/bootstrap');
describe('test/service/news.test.js',()=>{
  it('测试list方法',async ()=> {
    let LENGTH = 3;
    let ctx = app.mockContext();
    let result = await ctx.service.news.list(LENGTH);
    assert(result.length === LENGTH);
  })
})
const {app,mock,assert} = require('egg-mock/bootstrap');
// 在测试用例中拿到ctx对象
describe('test/controller/news.test.js', function() {
  /* it('get a ctx', ()=>{
    let ctx = app.mockContext({
      session: {name: 'y'}
    }) // ctx.session.name = 'y';
    assert(ctx.method == 'GET');
    assert(ctx.url == '/');
    assert(ctx.session.name == 'y');
  }) */

  // 异步测试
  it('promise',()=>{
    // 向服务器发送了一个get方法请求/news,期望状态码为200
    return app.httpRequest().get('/news').expect(200);
  })
})
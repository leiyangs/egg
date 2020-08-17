const { app, mock, assert } = require('egg-mock/bootstrap');
describe('test/app/extend/context.test.js',() => {
    let language="zh-cn";
    it('test language',async () => {
        const ctx=app.mockContext({headers: {'Accept-Language':language}});
        //console.log('ctx.lan',ctx.lan())
        assert(ctx.language() == language);
  });
});
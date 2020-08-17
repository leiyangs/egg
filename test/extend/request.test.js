const { app, mock, assert } = require('egg-mock/bootstrap');
describe('test/app/extend/request.test.js',() => {
    it('cache',async () => {
        const ctx=app.mockContext({
            headers: {
                'User-Agent':'I love Chrome'
            }
        });
        assert(ctx.request.isChrome);
  });
});
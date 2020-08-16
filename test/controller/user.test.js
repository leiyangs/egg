const { app, mock, assert } = require('egg-mock/bootstrap');
it('test post', async () => {
  let user = { username: 'y' };
  app.mockCsrf(); // 模拟egg的csrftoken
  let response = await app.httpRequest().post('/doAdd').send(user).expect(200);
  assert(response.body.id == 1);
});
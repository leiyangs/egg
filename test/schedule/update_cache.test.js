const mock = require('egg-mock');
const assert = require('assert');

it('should schedule work fine', async () => {
  const app = mock.app();
  await app.ready(); // 等待app.js中计划任务执行完成
  await app.runSchedule('updatecache');
  assert(app.cache);
});
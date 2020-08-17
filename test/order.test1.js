/* // egg-mock的钩子函数
describe('egg test', () => {
  // 在所有测试用例之间执行
  before(() => console.log('order 1'));
  before(() => console.log('order 2'));
  // 每个测试用例之前执行
  beforeEach(() => console.log('order 3'));
  it('should worker', () => console.log('order 4'));
  // 每个测试用例之后执行
  afterEach(() => console.log('order 5'));
  after(() => console.log('order 6'));
}); */
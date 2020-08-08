// let app = express();  let app = new Koa();
module.exports = app => {
  // 从app中解构router和controller
  // router = new Router();koa中的Router controller = new NewsController();
  const {router, controller} = app;
  // 定义路由规则(当客户通过get方式访问news的时候，有index函数返回内容)
  router.get("/news", controller.news.index);
  router.get('/greeting', controller.news.greeting);
  router.get('/users', controller.users.index);
}
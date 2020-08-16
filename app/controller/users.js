const { Controller } = require('egg');
let users = [];
class UserController extends Controller {
  async index() {
    let { ctx } = this;
    await ctx.render('user/list', { users });
  }
  async add() {
    let { ctx } = this;
    await ctx.render('user/add', {});
  }
  async doAdd() {
    let { ctx } = this;
    let user = ctx.request.body;
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(user);
    ctx.body = user;
  }
}
module.exports = UserController;
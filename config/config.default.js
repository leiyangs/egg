// keys用来加密cookie 服务器把cookie发送给客户端，为了防止客户篡改数据，需要设置一个密码
// exports.keys = 'yy';

// 如果需要使用插件的话用下面的方式
module.exports = app =>{
  let config = {};
  config.keys = app.name+new Date(); // 配置加密key
  config.view = { //配置视图
    mapping: {
      '.html': 'nunjucks'
    }
  }
  return config;
}
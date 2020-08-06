// keys用来加密cookie 服务器把cookie发送给客户端，为了防止客户篡改数据，需要设置一个密码
// exports.keys = 'yy';

let path = require('path');
// 如果需要使用插件的话用下面的方式
module.exports = app => {
  let config = {};
  config.keys = 'yy'; // 配置加密key
  config.view = { // 配置视图
    defaultExtension: '.html', // 默认扩展名：如果渲染一个文件的扩展名没有指定并且找不到这个文件，就会默认扩展名为.html再次寻找
    defaultViewEngine: 'nunjucks', // 默认渲染：如果摸个文件的扩展名没有在mapping中配置，默认nunjucks处理
    mapping: {
      '.html':'nunjucks'
    },
    root: [ // 渲染文件 设置根路径
      path.join(app.baseDir, 'app/views')
    ].join(',')
  }
  config.news = {
    url: 'http://localhost:3000/news' // 配置远程请求地址
  }
  config.cache = {
    url: 'http://localhost:3000/title' // 请求title的地址
  }
  config.mysql = { // 配置数据源
    // 单数据库信息配置’
    client: {
      host: 'localhost', // host
      port: '3307', // 端口
      user: 'root', // 用户名
      password: 'root', // 密码
      database: 'cms-development' // 数据库名
    },
    app: true, // 是否加载到App上，默认开启
    agent: false // 实付加载到agent(代理)上，默认关闭
  }
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    username: "root",
    password: "root",
    database: 'cms-development'
  };
  return config;
}
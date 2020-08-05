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
  return config;
}
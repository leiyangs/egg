# egg.js

- [egg](https://eggjs.org/zh-cn/intro/)
- 提供基于 Egg 定制上层框架的能力
- 高度可扩展的插件机制
- 内置多进程管理
- 基于 Koa 开发，性能优异
- 框架稳定，测试覆盖率高
- 渐进式开发

## egg-bin 开发服务器

```npm
cnpm i egg -S
cnpm i egg-bin -S -D
```

## 配置script

```json
egg-bin dev
```

## 服务端渲染项目

项目运行是会自动创建public文件夹，用来存放静态文件

利用nunjucks模板引擎,egg-view-nunjucks是egg的插件

```npm
cnpm install egg-view-nunjucks --save
```

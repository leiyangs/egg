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

## 项目结构

egg的文件夹名称是规定好的
├── package.json
├── app.js (app.js 和 agent.js 用于自定义启动时的初始化工作)
├── agent.js (可选)
├── app
|   ├── router.js(用于配置 URL 路由规则)
│   ├── controller(用于解析用户的输入，处理后返回相应的结果)
│   |   └── home.js
│   ├── service (用于编写业务逻辑层，可选)
│   |   └── user.js
│   ├── middleware (用于编写中间件，可选)
│   |   └── response_time.js
│   ├── schedule (用于定时任务，可选)
│   |   └── my_task.js
│   ├── public (用于放置静态资源，可选)
│   |   └── reset.css
│   ├── extend (用于框架的扩展，可选)
│   |   └── application.js app 对象指的是 Koa 的全局应用对象，全局只有一个，在应用启动时被创建。
│       ├── context.js (Context 指的是 Koa 的请求上下文，这是 请求级别 的对象)
│       ├── request.js (Request 对象和 Koa 的 Request 对象相同，是 请求级别 的对象)
│       ├── response.js (Response 对象和 Koa 的 Response 对象相同，是 请求级别 的对象)
│       ├── helper.js (Helper 函数用来提供一些实用的 utility 函数)
│   ├── view (用于放置模板文件)
│   |   └── home.tpl
├── |── model (用于放置领域模型)
│   |   └── home.tpl
│   └── extend (用于框架的扩展)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config(用于编写配置文件)
|   ├── plugin.js(用于配置需要加载的插件)
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test(用于单元测试)
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js

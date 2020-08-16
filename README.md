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

```npm
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

```json
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
```

## MySQL

框架提供了 egg-mysql 插件来访问 MySQL 数据库。这个插件既可以访问普通的 MySQL 数据库，也可以访问基于 MySQL 协议的在线数据库服务。

```npm
cnpm i --save egg-mysql
```

开启插件 config/plugin.js

```js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

## Sequelize

在一些较为复杂的应用中，我们可能会需要一个 ORM 框架来帮助我们管理数据层的代码。而在 Node.js 社区中，sequelize 是一个广泛使用的 ORM 框架，它支持 MySQL、PostgreSQL、SQLite 和 MSSQL 等多个数据源

- 安装

egg-sequelize插件会辅助我们将定义好的Model对象加载到app和ctx上

```npm
cnpm install --save egg-sequelize mysql2
```

- 启用插件

```js
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```

- sequelize 配置

```js
// config/config.default.js
config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "root",
    database: 'cms-development'
};

// config/config.test.js
module.exports=app => {
    let config={};
    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: "root",
        password: "root",
        database: 'cms-test',
    };
    return config;
}
```

- 初始化数据库

sequelize 提供了 sequelize-cli 工具来实现 Migrations
sequelize-cli用于支持数据迁移和项目引导。通过迁移，可以将现有数据库迁移到另一个状态，反之亦然
这些迁移文件会被保存在迁移文件中，迁移文件描述了怎样到达新状态以及如何恢复更改以返回到迁移前的旧状态

```npm
cnpm install --save sequelize sequelize-cli
```

- sequelizerc

我们希望将所有数据库 Migrations 相关的内容都放在database 目录下，所以我们在项目根目录下新建一个 `.sequelizerc` 配置文件
config 包含配置文件，它告诉 CLI 如何连接数据库
migrations-path 包含所有迁移文件
seeders-path 包含所有种子文件,seeders 来在初始化数据表中中初始化一些基础数据
models-path 包含您的项目的所有模型

```js
const path = require('path');
module.exports = {
  config: path.join(__dirname, 'database/config.json'),
  'migrations-path': path.join(__dirname, 'database/migrations'),
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};
```

- 初始化 Migrations

在项目的演进过程中，每一个迭代都有可能对数据库数据结构做变更，怎样跟踪每一个迭代的数据变更，并在不同的环境（开发、测试、CI）和迭代切换中，快速变更数据结构呢？这时候我们就需要 Migrations 来帮我们管理数据结构的变更了
初始化 Migrations 配置文件和目录
执行完后会生成 database/config.json 文件和 database/migrations

```npm
npx sequelize init:config
npx sequelize init:migrations
```

key是环境变量NODE_ENV的值，默认就是 development
set NODE_ENV=test

```json
config.json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "cms-development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "cms-test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

- 创建users表

编写项目的第一个 Migration 文件来创建我们的一个 users 表

```npm
npx sequelize migration:generate --name=init-users
// 执行完后会在 database/migrations 目录下生成一个 migration 文件(${timestamp}-init-users.js)
```

创建升级脚本

```js
// database\migrations\20190608143311-init-users.js
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
```

执行 migrate 进行数据库变更

```npm
# 升级数据库
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```

添加种子数据

```npm
sequelize seed:create --name init-users
npx sequelize db:seed:all
npx sequelize db:seed:all --env development
```

database\seeders\20190803152323-init-users.js

```js
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'zhufeng',
            age:1,
            created_at: new Date(),
            updated_at: new Date()
        },{
            name: 'jiagou',
            age:2,
            created_at: new Date(),
            updated_at: new Date()
        }],{});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};

```

使用

```js
// app\model\user.js
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('User', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
// 这个 Model 就可以在 Controller 和 Service 中通过 app.model.User 或者 ctx.model.User 访问到了
```

router.js

```js
// app\router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/news', controller.news.index);
    router.get('/users', controller.users.index);
}
```

users.js

```js
const { Controller } = require('egg');
class UserController extends Controller {
    async index() {
       const {ctx,service}=this;
       ctx.body = await ctx.model.User.findAll();
    }
}
module.exports = UserController;
```

单元测试

```json
添加命令 "test": "egg-bin test"
安装egg-mock npm i egg-mock -S -D
```

test/order.test1.js 是egg-mock的钩子函数

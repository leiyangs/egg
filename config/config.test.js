module.exports=app => {
  let config={};
  config.sequelize = {
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: "root",
      password: "root",
      database: 'cms-test',
  };
  return config;
}
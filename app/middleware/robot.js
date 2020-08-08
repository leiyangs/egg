module.exports=(options,app) => {
  return async function(ctx,next) {
      const source=ctx.get('user-agent')||'';
      const matched=options.ua.some(ua => ua.test(source));
      if (matched) {
          ctx.status=403;
          ctx.body='你没有访问权限';
      } else {
          await next();
      }
  }
}

// 通过以下方法访问
// curl -v  --user-agent 'Chrome'  http://127.0.0.1:7001/news
// curl -v  --user-agent 'Chrome'  http://127.0.0.1:7001/news
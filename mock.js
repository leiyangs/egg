// 模拟远程接口
let express = require('express');
let Mock = require('mockjs');
let app = new express();
app.get('/news', function(req,res){
  let limit = req.query.limit;
  let result = Mock.mock({
    "code": 0,
    "message": "success",
    [`data|${limit}`]: [ //mock数据，limit是几就生成几条
      {
        "id": "@id",
        "title": "@csentence",
        "url": "@url",
        "image": "@image(600X300)",
        "createAt": "@datetime"
      }
    ]
  })
  res.json(result);
})

app.listen(3000);
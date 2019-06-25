var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function (req,res,next) {
  //做一些针对/users路由的操作
  res.set({
    'hhh': '12345'
  });
  next()
})
router.get('/a', function(req, res, next) {
  console.log('a')
  res.send({code:0,data:{a:1}});
});

module.exports = router;

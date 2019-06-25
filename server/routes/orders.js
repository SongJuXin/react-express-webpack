var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  console.log('query',req.params,req.query)
  res.send('data');
});

module.exports = router;

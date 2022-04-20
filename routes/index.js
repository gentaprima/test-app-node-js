var express = require('express');
var router = express.Router();

const indexControler = require("../app/controller/indexController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sort-data',indexControler.sortData)

module.exports = router;

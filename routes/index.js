var express = require('express');
var router = express.Router();

var ProtoBuf = require("protobufjs");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

  var builder = ProtoBuf.loadProtoFile("data/test.proto");

  console.log(builder);
});

module.exports = router;

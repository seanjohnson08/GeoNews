var express = require('express');
var router = express.Router();

var ProtoBuf = require("protobufjs");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

  ProtoBuf.loadProtoFile("data/test.proto", function(err, builder) {
    console.log(err);
  });
});

module.exports = router;

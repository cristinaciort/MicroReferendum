var express = require('express');
var router = express.Router();
var mrefctrl = require('../controllers/mrefer.server.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
    return mrefctrl.hello(req, res);
});

module.exports = router;

var model = require('../models/mrefer.server.model.js')

exports.home = function(req, res) {
    res.render('home');
};

exports.pollsList = function(req, res) {
    res.render('pollsList');
};

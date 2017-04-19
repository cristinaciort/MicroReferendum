var model = require('../models/mref.server.model.js')

exports.home = function(req, res) {
    res.render('home');
};

exports.pollsList = function(req, res) {
    res.render('pollsList');
};

exports.addPoll = function(req, res) {
    res.render('addPoll');
};

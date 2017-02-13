var Vlasnik = require('../models/Vlasnik.js');

module.exports.create = function (req, res) {
  var vlasn = new Vlasnik(req.body);
  vlasn.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Vlasnik.find({}, function (err, results) {
    res.json(results);
  });
}
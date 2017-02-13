var Posao = require('../models/Posao.js');

module.exports.create = function (req, res) {
 // var error;
  var posao = new Posao(req.body);
//  error = posao.validateSync();
//  if(error){
 //   error.CustomError ="Nisam ni otisao na server";
 //    res.json(error); 
//  }
  posao.save(function (err, result) {
     debugger;
      if(err){
         //console.log(err); 
        res.json(err); 
      }
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Posao.find({}, function (err, results) {
    res.json(results);
  });
}
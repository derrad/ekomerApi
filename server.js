var express            = require('express'),
     app               = express(),
     bodyParser        = require('body-parser'),
     mongoose          = require('mongoose');


//use configure app
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zadruga'); 

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("conect to mongose");
});

// mongoose.on('error', console.error.bind(console, 'connection error:'));
// mongoose.once('open', function() {
//   // we're connected!
//   console.log("conect to mongose");
// });


//use midleware
app.use(bodyParser()); ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));
//app.use(express.static(__dirname + '/fonts'));
// app.use(express.static(__dirname + '/server'));
app.set('view engine', 'ejs');



//use route

// app.get('/', function(req, res) {
//   //res.send('Hello World');
//   // res.render('./client/index.html');
//     res.sendFile(path.join(__dirname, 'client/index.html'));
// });

app.get('/', function(req, res) {
    res.render('pages/index');
});

//posle izbaci i rute podeli po oblastima u fajlove
var VlasnikController = require('./server/controllers/VlasnikContrl');; 
app.get('/api/vlasnik', VlasnikController.list);
app.post('/api/vlasnik', VlasnikController.create); 

var PosaoController = require('./server/controllers/PosaoContrl');; 
app.get('/api/posao', PosaoController.list);
app.post('/api/posao', PosaoController.create); 



// app.get('/', function(req, res) {
//   //res.send('Hello World');
//   // res.render('./client/index.html');
//     res.sendFile(path.join(__dirname, 'client/index.html'));
// });


//error
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



//starter server

var SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, function() {
  console.log('listening on ' + SERVER_PORT);
})
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var shortid = require('shortid');
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);
var request = require("request");
var YouTube = require('youtube-node');
var nodemailer = require('nodemailer');
var youTube = new YouTube();
youTube.setKey('AIzaSyDq59vMwlHRFGZknBDicOzw9sPH1IKcEAM');
var nowtime = 'test';






var transporter = nodemailer.createTransport({
    host: 'web01.viaict.nl',
    port: 587,
    auth: { user: 'alexvandermeer@birsken.com', pass: '#svNJlmYVnEx9' },
    secure: false,
    tls: {    rejectUnauthorized: false}
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/mobiel', function(req, res, next) {
  res.render('mobiel', {title: 'Birsken'})
});

app.get('/mobiel/over', function(req, res, next) {
  res.render('mobielover', {title: 'Birsken'})
});

app.get('/mobiel/diensten', function(req, res, next) {
  res.render('mobieldiensten', {title: 'Birsken'})
});

app.get('/mobiel/contact', function(req, res, next) {
  res.render('mobielcontact', {title: 'Birsken'})
});

app.post('/endpoint', function(req, res){
var email = req.body;

// var mailOptions = {
//     from: '"Alex van der Meer" <alexvandermeer@birsken.com>', // sender address
//     to: email.adres, // list of receivers
//     subject: email.naam, // Subject line
//     html: email.bericht // html body
// };


var mailOptionsOut = {
    from: '"Alex van der Meer" <alexvandermeer@birsken.com>', // sender address
    to: email.adres, // list of receivers
    subject: "Email bevestiging", // Subject line
    html: "<bold>Een copy van u email aan info@birsken.com</bold><br><br>" + email.bericht
};


var mailOptionsIn = {
    from: '"'+email.naam+'" <'+email.adres+'>', // sender address
    to: 'alexvandermeer@birsken.com', // list of receivers
    subject: email.naam, // Subject line
    html: email.bericht
};

transporter.sendMail(mailOptionsOut, function(err) {
  if (err) {
    console.log(err);

  }

})
transporter.sendMail(mailOptionsIn)


});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('index', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

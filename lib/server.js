var exp = require('express');
var crypto = require('crypto');
var con = require('console');
var path = require('path');
var fs = require('fs');

var sessionSecretSeed = crypto.randomBytes(16).toString('hex');

var app = exp();

app.configure(function(){
    app.set('views', path.resolve(__dirname + '/../www'))
    app.use(exp.bodyParser());
    app.use(exp.cookieParser());
    app.use(exp.compress());
    app.use(exp.session({ secret : sessionSecretSeed }));
    app.use(app.router);
    app.use(exp.static(path.resolve(__dirname + '/../www/assets')));
});

app.get("/", function(req, res){
    res.render("index.jade");
});

// Initialization completed

module.exports = app;

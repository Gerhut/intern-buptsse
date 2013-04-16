var exp = require('express');
var crypto = require('crypto');
var con = require('console');
var path = require('path');
var fs = require('fs');

var sessionSecretSeed = crypto.randomBytes(16).toString('hex');

var app = exp();

var lessware = require('compile-mw-less');
var jadeware = require('compile-mw-jade-runtime');

var compile = {
    less: lessware({
        filename  : /(?:\/style\/)(.*)\.css/i,
        src       : 'www/less'
    }),
    jade: jadeware({
        filename  : /(?:\/view\/)(.*)\.js/i,
        src       : 'www/views'
    })
};

app.configure(function(){
    app.set('views', path.resolve(__dirname + '/../www/views'))
    app.use(exp.logger());
    app.use(exp.bodyParser());
    app.use(exp.cookieParser());
    app.use(exp.compress());
    app.use(exp.session({ secret : sessionSecretSeed }));
    app.use(compile.less);
    app.use(compile.jade);
    app.use(app.router);
    app.use(exp.static(path.resolve(__dirname + '/../www/assets')));
});

app.get("/", function(req, res){
    res.render("index.jade");
});

// Initialization completed

module.exports = app;

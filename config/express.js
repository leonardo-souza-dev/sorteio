var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    mongoose = require('./db.js')('mongodb://admin:VV131415@ds153495.mlab.com:53495/heroku_nnplrj9x');

module.exports = ( function() {
    var app = express();

    //variaveis de ambiente
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //middlewares
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //carregando modulos dentro da instancia de app
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}() );

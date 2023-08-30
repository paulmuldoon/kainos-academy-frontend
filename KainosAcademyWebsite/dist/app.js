"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var session = require('express-session');
var app = express();
//configure nunjucks
var appViews = path.join(__dirname, 'views');
var nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};
nunjucks.configure(appViews, nunjucksConfig);
//configure express
app.set('view engine', 'html');
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/resources', express.static(__dirname + '/resources'));
app.use(session({ secret: 'NOT HARDCODED SECRET', cookie: { maxAge: 60000 } }));
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
//express routes
app.get('/', function (req, res) {
    res.render('index.html', {
        title: 'My Blog',
    });
});
require('./controller/productController')(app);
require('./controller/orderController')(app);
//# sourceMappingURL=app.js.map
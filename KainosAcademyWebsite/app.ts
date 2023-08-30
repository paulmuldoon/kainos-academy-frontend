import { Request, Response } from "express";
import { Product } from "./model/products";

const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session');

const app = express();

//configure nunjucks
const appViews = path.join(__dirname, 'views');

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

//configure express

app.set('view engine', 'html');

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true}));

app.use('/resources', express.static(__dirname + '/resources'));

app.use(session({ secret: 'NOT HARDCODED SECRET', cookie: {maxAge: 60000}}));

declare module "express-session" {
    interface SessionData {
        product: Product;
    }
}

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

//express routes

app.get('/', (req:Request, res:Response) => {
    res.render('index.html', {
        title: 'My Blog',
    });
});

require('./controller/productController')(app);
require('./controller/orderController')(app);
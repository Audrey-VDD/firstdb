const express = require('express');
const app = express();
const path = require('path');
const  crudProduct = require('./routes/crudProduct');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/img', express.static(path.join(__dirname,'/img')));

app.use('/product', crudProduct);

app.listen(3000, ()=> {
    console.log("c'est bon capitaine");    
});
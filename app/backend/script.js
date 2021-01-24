const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const opencv = require('./opencv');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(opencv.getvideo);

app.listen(3000);

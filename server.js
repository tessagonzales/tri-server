const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const logger = require('morgan')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
require('./config/routes')(app);


app.listen(port, function () {
    console.log('Magic happens on', port);
});

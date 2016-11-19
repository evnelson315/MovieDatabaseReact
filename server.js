var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var routes = require('./controllers/route-controllers.js')

// var models = require('./models');
// models.sequelize.sync();

app.use(express.static('public'));
app.use(express.static('app'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});
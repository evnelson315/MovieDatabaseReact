var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var routes = require('./controllers/route-controllers.js')
var path = require("path");
var models = require('./models');
models.sequelize.sync();
app.use(express.static('public'));
app.use(express.static('app'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});


app.post('/api/users/addMovie', function(req,res){
	models.Movie.create({
		title:req.body.title,
		year:req.body.year,
		rating:req.body.rating,
		actors:req.body.actors,
		genre:req.body.genre
	}).then(function(success) {
			res.json(success); 
		}).catch(function(err){
			res.json(err);
	});
});

app.get('/api/getMovies', function(req,res){
	models.Movie.findAll().then(function(movies){
		res.json(movies)
	})
})



app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})


var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});
// built in modules
const path = require('path');

// npm modules
const express = require('express');
const app = express();
// const Sequelize = require('sequelize');
const models = require('./models')
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const nunjucks = require('nunjucks');

module.exports = app;

// our modules
//DB stuff
// var db = new Sequelize('postgres://localhost:5432/trip_planner', {
//     logging: false
// });



//
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

models.Place.sync( {force: true})
.then(function(){
	return models.Hotel.sync({force: true})
})
.then(function(){
	return models.Activity.sync({force: true})
})
.then(function(){
	return models.Restaurant.sync({force: true})
})
.then(function(){
	app.listen(3000, function(){
		console.log('Server listening on part 3000 \n');
	})
})
.catch( console.error)
// app.listen(3000, function(){
// 	console.log('Server listening on part 3000 \n');
// })


app.get('/', function(req, res, next){
	res.render('index');
})

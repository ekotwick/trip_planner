// built in modules
const path = require('path');

// npm modules
const express = require('express');
const app = express();
// const Sequelize = require('sequelize');
const models = require('./models')
const Place = require('./models/place');
const Hotel = require('./models/hotel');
const Restaurant = require('./models/restaurant');
const Activity = require('./models/activity');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const nunjucks = require('nunjucks');

module.exports = app;

// our modules

const router = require('./routes/routes');
//DB stuff
// var db = new Sequelize('postgres://localhost:5432/trip_planner', {
//     logging: false
// });


app.use('/', router);
//
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
// when making static routes, be sure to pass two arguments, the name and the express.static method//
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/bootstrap', express.static(path.join(__dirname, './node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var force = false;

Place.sync( {force} )
.then(function(){
	return Hotel.sync({force})
})
.then(function(){
	return Activity.sync({force})
})
.then(function(){
	return Restaurant.sync({force})
})
.then(function(){
	app.listen(3000, function(){
		console.log('Server listening on part 3000 \n');
	})
})
.catch( console.error);


// error handling middleware

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500).send(err.message);
})


// app.listen(3000, function(){
// 	console.log('Server listening on part 3000 \n');
// })


// app.get('/', function(req, res, next){
// 	res.render('index');
// })

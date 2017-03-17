const express = require('express');
const router = express.Router();

const Promise = require('bluebird');

const models = require('../models')
const Place = require('../models/place');
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');


router.get('/', function(req, res, next){

	let findHotels = Hotel.findAll({});
	let findRestaurants = Restaurant.findAll({});
	let findActivities = Activity.findAll({});

	Promise.all([findHotels, findRestaurants, findActivities])
		.spread(function(hotels, restaurants, activities){
			res.render('index', {
				hotels: hotels,
				restaurants: restaurants,
				activities: activities,
			})
		})
		.catch(next);
})

module.exports = router;
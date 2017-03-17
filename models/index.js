var Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
    logging: false
});

var Hotel = require('./hotel.js')
var Activity = require('./activity.js')
var Restaurant = require('./restaurant.js')
var Place = require('./place.js')

Hotel.belongsTo(Place)
Activity.belongsTo(Place)
Restaurant.belongsTo(Place)

// module.exports = {
//     Hotel: Hotel,
//     Activity: Activity,
//     Restaurant: Restaurant,
//     Place: Place
// };

module.exports = db;

var Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
    logging: false
});



var Hotel = db.define('hotel', {
  name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  num_stars:  {
        type: Sequelize.FLOAT,
        allowNull: false
    },
  amenities: {
       type: Sequelize.STRING
  }
})




module.exports =  Hotel

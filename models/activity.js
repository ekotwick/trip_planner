var Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
    logging: false
});

var Activity = db.define('activity', {
  name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  age_range:  {
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = Activity

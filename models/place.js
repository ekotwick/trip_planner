var Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
    logging: false
});

var Place = db.define('place', {
  address: {
        type: Sequelize.STRING,
        allowNull: false
    },
  city:  {
        type: Sequelize.STRING,
        allowNull: false
    },
  state: {
        type: Sequelize.STRING,
        allowNull: false
    },
  phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
  location: {
       type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})



module.exports = Place

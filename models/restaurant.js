var Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/trip_planner', {
    logging: false
});



var Restaurant = db.define('restaurant', {
  name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  cuisine: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        set: function(value) {
          var arrayOfFoods = value.split(',').map(function(s){
            return s.trim()
          })
          this.setDataValue('cuisine', arrayOfFoods);
        }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports =  Restaurant

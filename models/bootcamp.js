module.exports = function(sequelize, DataTypes) {
  var Bootcamp = sequelize.define("Bootcamp", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Bootcamp;
};

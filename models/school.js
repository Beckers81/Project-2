module.exports = function (sequelize, DataTypes) {
    var School = sequelize.define("School", {
      name: DataTypes.STRING,
      location: DataTypes.STRING
    });
    return School;
  };
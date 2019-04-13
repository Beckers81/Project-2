module.exports = function(sequelize, DataTypes) {
  var School = sequelize.define("School", {
    schoolName: DataTypes.STRING
  });
  return School;
};

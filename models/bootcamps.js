module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("School", {
    onlineClasses: DataTypes.INTEGER,
    multipleCodingLanguages: DataTypes.INTEGER,
    specificLanguage: DataTypes.INTEGER,
    codingExperience: DataTypes.INTEGER,
    fullTime: DataTypes.INTEGER,
    partTime: DataTypes.INTEGER,
    weekendClasses: DataTypes.INTEGER,
    accredidation: DataTypes.INTEGER,
    financialAid: DataTypes.INTEGER,
    mentoring: DataTypes.INTEGER,
    minHours: DataTypes.INTEGER
  });
  return Answers;
};

module.exports = function(sequelize, DataTypes) {
  var School = sequelize.define("School", {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return School;
};

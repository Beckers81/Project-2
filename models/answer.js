module.exports = function (sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
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
      minHours: DataTypes.INTEGER,
    });
    return Answer;
  };
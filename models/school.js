module.exports = function(sequelize, DataTypes) {
  var School = sequelize.define("School", {
    schoolName: DataTypes.STRING,
    location: DataTypes.STRING,
    onlineClasses: DataTypes.INTEGER,
    multipleCodingLanguages: DataTypes.INTEGER,
    specificLanguage: DataTypes.INTEGER,
    codingExperience: DataTypes.INTEGER,
    fullTime: DataTypes.INTEGER,
    budget: DataTypes.INTEGER,
    accredidation: DataTypes.INTEGER,
    financialAid: DataTypes.INTEGER,
    weekendClasses: DataTypes.INTEGER,
    mentoring: DataTypes.INTEGER,
    createdAt: {
      type: "TIMESTAMP",
      allowNull: true
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: true
    }
  });
  return School;
};

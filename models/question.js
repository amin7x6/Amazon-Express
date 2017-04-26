'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        question.hasMany(models.Answer);
        // List of instance methods added to Question by
        // .hasMany
        // Question#getAnswers
        // Question#setAnswers
        // Question#addAnswer
        // Question#addAnswers
      }
    }
  });
  return Question;
};

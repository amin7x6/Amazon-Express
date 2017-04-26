'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      QuestionId: {
       type: Sequelize.INTEGER,
       // the references creates a foreign key constraint in the database
       references: {
       // the model property takes a value that is the table name of that
       // QuestionId should refer to
       model: 'Questions',
       // the key property refers to the column inside the Questions table
       // that QuestionId points to
       key: 'id'
       },
       // setting onDelete property to cascade will make sure that all
       // Answers associated to a question are deleted when that question is
       // deleted
       onDelete: 'cascade',
       onUpdate: 'cascade'
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Answers');
  }
};

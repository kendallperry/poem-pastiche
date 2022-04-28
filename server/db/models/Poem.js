const Sequelize = require('sequelize');
const db = require('../db');

const Poem = db.define('poem', {
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
          }, 
    },
    firstLine: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          }, 
    }
});

module.exports = Poem;

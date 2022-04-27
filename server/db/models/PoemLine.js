const Sequelize = require('sequelize')
const db = require('../db')

const PoemLine = db.define('line', {
    line: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          },
    }
});

module.exports = PoemLine;

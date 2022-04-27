const db = require('./db')

const User = require('./models/User');
const Poem = require('./models/Poem');
const PoemLine = require('./models/PoemLine');

PoemLine.belongsTo(Poem, { foreignKey: { allowNull: false } });
Poem.hasMany(PoemLine);

User.hasMany(PoemLine);
PoemLine.belongsTo(User);

User.hasMany(Poem);
Poem.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Poem,
    PoemLine,
  },
}

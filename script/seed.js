'use strict'

const {db, models: {User, Poem, PoemLine} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  //Creating Poems

  const poems = await Promise.all([
    Poem.create({
      title: "bright sounds"
    }),
    Poem.create({
      title: "gradient sky"
    }),
    Poem.create({
      title: "everything bagels in spring"
    }),
    Poem.create({
      title: "ginger tea"
    }),
    Poem.create({
      title: "for when the first stars appear"
    })
  ]);

  // Creating Poem lines

  const lines = await Promise.all([
    PoemLine.create({
      line: "you encapsulate me"
    }),
    PoemLine.create({
      line: "how are you so perfect every night"
    }),
    PoemLine.create({
      line: "and cherry blossoms to shake the winter blues" 
    }),
    PoemLine.create({
      line: "ginger tea"
    }),
    PoemLine.create({
      line: "take me up to the sky"
    }),
    PoemLine.create({
      line: "show me what infinity feels like"
    }),
  ]);

  await poems[0].addPoemLine(lines[0]);
  await poems[1].addPoemLine(lines[1]);
  await poems[2].addPoemLine(lines[2]);
  await poems[3].addPoemLine(lines[3]);
  await poems[5].addPoemLine(lines[4]);
  await poems[5].addPoemLine(lines[5]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${poems.length} poems`);
  console.log(`seeded ${lines.length} poem lines`);

  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

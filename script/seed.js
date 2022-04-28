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
    User.create({ username: 'kendall', password: '123' }),
    User.create({ username: 'grace', password: '123' }),
  ])

  //Creating Poems

  const poems = await Promise.all([
    Poem.create({
      title: "bright sounds",
      firstLine: "i can feel you everywhere",
      userId: 1,
    }),
    Poem.create({
      title: "gradient sky",
      firstLine: "blending colors",
      userId: 1,
    }),
    Poem.create({
      title: "everything bagels in spring",
      firstLine: "picnic benches in the park",
      userId: 2,
    }),
    Poem.create({
      title: "ginger tea",
      firstLine: "depends how long you steep",
      userId: 2,
    }),
    Poem.create({
      title: "for when the first stars appear",
      firstLine: "rooftop starry nights",
      userId: 1,
    }),
    Poem.create({
      title: "polaroid magic",
      firstLine: "with a single snap",
      userId: 1
    })
  ]);

  // Creating Poem lines

  const lines = await Promise.all([
    PoemLine.create({
      line: "you encapsulate me",
      poemId: 1,
      userId: 1,
    }),
    PoemLine.create({
      line: "how are you so perfect every night",
      poemId: 2,
      userId: 1,
    }),
    PoemLine.create({
      line: "and cherry blossoms to shake the winter blues",
      poemId: 3,
      userId: 1,
    }),
    PoemLine.create({
      line: "ginger tea",
      poemId: 4,
      userId: 1,
    }),
    PoemLine.create({
      line: "take me up to the sky",
      poemId: 5,
      userId: 1,
    }),
    PoemLine.create({
      line: "show me what infinity feels like",
      poemId: 5,
      userId: 1,
    }),
    PoemLine.create({
      line: "a memory you can hold",
      poemId: 6,
      userId: 1,
    }),
    PoemLine.create({
      line: "to remember what this feels like",
      poemId: 6,
      userId: 2,
    }),
    PoemLine.create({
      line: "two moments colliding, past and present",
      poemId: 6,
      userId: 1,
    }),
  ]);

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

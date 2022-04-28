const router = require("express").Router();
const {
  models: { Poem, PoemLine, User },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const poems = await Poem.findAll({ include: [PoemLine, User] });
    res.json(poems);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, firstLine } = req.body;
    const newPoem = await Poem.create({ title, firstLine });
    res.status(201).send(newPoem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

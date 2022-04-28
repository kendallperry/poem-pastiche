const router = require("express").Router();
const {
  models: { Poem, PoemLine, User },
} = require("../db");

router.post("/", async (req, res, next) => {
  try {
    const { line, poemId } = req.body;
    const newLine = await PoemLine.create({ line, poemId });
    res.status(201).send(newLine);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

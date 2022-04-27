const router = require("express").Router();
const { models: { Poem, PoemLine }} = require("../db");

router.get("/", async (req, res, next) => {
    try {
        // { include: PoemLine } after inside of findAll
        const poems = await Poem.findAll()
        res.json(poems);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

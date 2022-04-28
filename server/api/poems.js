const router = require("express").Router();
const { models: { Poem, PoemLine, User }} = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const poems = await Poem.findAll({ include: [PoemLine, User] })
        res.json(poems);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

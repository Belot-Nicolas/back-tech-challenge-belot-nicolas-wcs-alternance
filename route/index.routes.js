const router = require("express").Router();
const charactersRouter = require("./characters.routes");

router.use("/characters", charactersRouter);

module.exports = router;

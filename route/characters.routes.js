const router = require("express").Router();
const Characters = require("../models/characters.model.js");
const connection = require("../db-config");

router.get("/", (req, res) => {
  Characters.findMany()
    .then((character) => {
      res.json(character);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving character from database");
    });
});

router.post("/", (req, res) => {
  Characters.create(req.body)
    .then((createdCharacter) => {
      res.status(201).json(createdCharacter);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the character");
    });
});

module.exports = router;

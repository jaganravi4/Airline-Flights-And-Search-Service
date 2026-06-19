const express = require("express");

const { CityController } = require("../../controllers/index");

const router = express.Router();

router.post("/", CityController.create);
router.get("/:id", CityController.get);
router.patch("/:id", CityController.update);
router.delete("/:id", CityController.destroy);
router.get("/", CityController.getAll);

module.exports = router;

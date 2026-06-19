const express = require("express");
const router = express.Router();

const { AirportController } = require("../../controllers/index");

router.post("/", AirportController.create);
router.get("/:id", AirportController.get);
router.delete("/:id", AirportController.destroy);
router.patch("/:id", AirportController.update);

module.exports = router;

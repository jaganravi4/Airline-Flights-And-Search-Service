const express = require("express");
const router = express.Router();

const { AirplaneController } = require("../../controllers/index");

router.post("/", AirplaneController.create);
router.get("/:id", AirplaneController.get);
router.delete("/:id", AirplaneController.destroy);
router.patch("/:id", AirplaneController.update);
router.get("/", AirplaneController.getAll);

module.exports = router;

const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers/index");

router.post("/", FlightController.create);
router.get("/:id", FlightController.get);
router.get("/", FlightController.getAll);
router.delete("/:id", FlightController.destroy);
router.patch("/:id", FlightController.update);

module.exports = router;

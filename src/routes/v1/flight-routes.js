const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers/index");

router.post("/", FlightController.create);

module.exports = router;

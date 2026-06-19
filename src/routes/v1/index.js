const express = require("express");
const router = express.Router();

const cityRouter = require("./city-routes");
const airportRouter = require("./airport-routes");
const airplaneRouter = require("./airplane-routes");
const flightRouter = require("./flight-routes");

router.use("/city", cityRouter);
router.use("/airport", airportRouter);
router.use("/airplane", airplaneRouter);
router.use("/flight", flightRouter);

module.exports = router;

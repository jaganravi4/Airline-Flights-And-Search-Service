const express = require("express");
const router = express.Router();

const cityRouter = require("./city-routes");
const airportRouter = require("./airport-routes");
const airplaneRouter = require("./airplane-routes");
const flightRouter = require("./flight-routes");

router.use("/cities", cityRouter);
router.use("/airports", airportRouter);
router.use("/airplanes", airplaneRouter);
router.use("/flights", flightRouter);

module.exports = router;

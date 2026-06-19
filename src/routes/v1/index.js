const express = require("express");
const router = express.Router();

const cityRouter = require("./city-routes");
const airportRouter = require("./airport-routes");
const airplaneRouter = require("./airplane-routes");

router.use("/city", cityRouter);
router.use("/airport", airportRouter);
router.use("/airplane", airplaneRouter);

module.exports = router;

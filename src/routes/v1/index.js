const express = require("express");
const router = express.Router();

const cityRouter = require("./city-routes");
const airportRouter = require("./airport-routes");

router.use("/city", cityRouter);
router.use("/airport", airportRouter);

module.exports = router;

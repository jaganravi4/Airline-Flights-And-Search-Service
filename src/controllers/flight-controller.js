const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a flight",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the flight",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flight",
            error: error,
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all flights",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all flights",
            error: error,
        });
    }
};

module.exports = {
    create,
    get,
    getAll,
};

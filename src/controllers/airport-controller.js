const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a airport",
            error: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted a airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a airport",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airport",
            error: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(
            req.params.id,
            req.body,
        );
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airport",
            error: error,
        });
    }
};

module.exports = {
    create,
    get,
    update,
    destroy,
};

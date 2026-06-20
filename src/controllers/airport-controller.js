const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created an airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airport",
            error: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the airport",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
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
        const response = await airportService.update(req.params.id, req.body);
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

const getAll = async (req, res) => {
    try {
        const response = await airportService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all airports",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all the airports",
            error: error,
        });
    }
};

module.exports = {
    create,
    get,
    update,
    destroy,
    getAll,
};

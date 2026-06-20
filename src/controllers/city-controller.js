const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const response = await cityService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a city",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            error: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            error: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the city",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            error: error,
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all cities",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the cities",
            error: error,
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
};

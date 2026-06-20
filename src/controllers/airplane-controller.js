const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const response = await airplaneService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created an airplane",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airplane",
            error: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airplaneService.delete(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the airplane",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the airplane",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the airplane",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airplane",
            error: error,
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await airplaneService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all airplanes",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all the airplanes",
            error: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airplane",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airplane",
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

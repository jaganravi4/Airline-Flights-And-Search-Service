const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const response = await airplaneService.createAirplane(req.body);
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
        const response = await airplaneService.deleteAirplane(req.params.id);
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
        const response = await airplaneService.getAirplane(req.params.id);
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

const update = async (req, res) => {
    try {
        const response = await airplaneService.updateAirplane(
            req.params.id,
            req.body,
        );
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
};

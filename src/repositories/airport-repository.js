const { Airport } = require("../models/index");

class AirportRepository {
    async createAirport({ name, cityId, address }) {
        try {
            const airport = await Airport.create({
                name,
                cityId,
                address,
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.address = data.address;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = AirportRepository;

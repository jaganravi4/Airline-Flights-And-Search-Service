const { Flight } = require("../models/index");
const CrudRepository = require("./crud-repository");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAll(filter) {
        try {
            const flights = await Flight.findAll({
                where: filter,
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw { error };
        }
    }
}

module.exports = FlightRepository;

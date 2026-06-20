const { AirportRepository } = require("../repositories/index");
const CrudService = require("./crud-service");

const airportRepository = new AirportRepository();

class AirportService extends CrudService {
    constructor() {
        super(airportRepository);
    }
}

module.exports = AirportService;

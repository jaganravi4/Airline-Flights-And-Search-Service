const { AirplaneRepository } = require("../repositories/index");
const CrudService = require("./crud-service");

const airplaneRepository = new AirplaneRepository();

class AirplaneService extends CrudService {
    constructor() {
        super(airplaneRepository);
    }
}

module.exports = AirplaneService;

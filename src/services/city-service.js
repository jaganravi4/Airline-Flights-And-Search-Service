const { CityRepository } = require("../repositories/index");
const CrudService = require("./crud-service");

const cityRepository = new CityRepository();

class CityService extends CrudService {
    constructor() {
        super(cityRepository);
    }

    async getAll(filter) {
        try {
            const cities = await cityRepository.getAll({
                name: filter.name,
            });
            return cities;
        } catch (error) {
            console.log("Something went wrong in the city service");
            throw { error };
        }
    }
}

module.exports = CityService;

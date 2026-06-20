const { Op } = require("sequelize");

const { City } = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }

    async getAll(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name,
                        },
                    },
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the city repository");
            throw { error };
        }
    }
}

module.exports = CityRepository;

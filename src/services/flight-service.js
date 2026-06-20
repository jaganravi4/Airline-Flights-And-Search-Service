const {
    FlightRepository,
    AirplaneRepository,
} = require("../repositories/index");
const { compareTime } = require("../utils/helper");
const { Op } = require("sequelize");
const CrudService = require("./crud-service");

const flightRepository = new FlightRepository();
const airplaneRepository = new AirplaneRepository();

class FlightService extends CrudService {
    constructor() {
        super(flightRepository);
    }

    #createFilter(data) {
        let filter = {};

        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        let priceFilter = [];

        if (data.minPrice) {
            priceFilter.push({
                price: {
                    [Op.gte]: data.minPrice,
                },
            });
        }

        if (data.maxPrice) {
            priceFilter.push({
                price: {
                    [Op.lte]: data.maxPrice,
                },
            });
        }

        Object.assign(filter, {
            [Op.and]: priceFilter,
        });
        return filter;
    }

    async create(data) {
        try {
            if (!compareTime(data.departureTime, data.arrivalTime)) {
                throw {
                    error: "Arrival time cannot be less than departure time",
                };
            }
            const airplane = await airplaneRepository.get(data.airplaneId);
            const totalSeats = airplane.capacity;
            const flight = await flightRepository.create({
                ...data,
                totalSeats,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight service");
            throw { error };
        }
    }

    async getAll(data) {
        try {
            const filterObject = this.#createFilter(data);
            const flights = await flightRepository.getAll(filterObject);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the flight service");
            throw { error };
        }
    }
}

module.exports = FlightService;

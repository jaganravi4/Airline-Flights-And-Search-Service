const {
    FlightRepository,
    AirplaneRepository,
} = require("../repositories/index");
const { compareTime } = require("../utils/helper");
const { Op } = require("sequelize");

class FlightService {
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

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.departureTime, data.arrivalTime)) {
                throw {
                    error: "Arrival time cannot be less than departure time",
                };
            }
            const airplane = await this.airplaneRepository.getAirplane(
                data.airplaneId,
            );
            const totalSeats = airplane.capacity;
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getAllFlights(data) {
        try {
            const filterObject = this.#createFilter(data);
            const flights =
                await this.flightRepository.getAllFlights(filterObject);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;

const { Flight } = require("../models/index");

class FlightRepository {
    async createFlight({
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        departureTime,
        arrivalTime,
        totalSeats,
        price,
    }) {
        try {
            const flight = await Flight.create({
                flightNumber,
                airplaneId,
                departureAirportId,
                arrivalAirportId,
                departureTime,
                arrivalTime,
                totalSeats,
                price,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const flights = await Flight.findAll({
                where: filter,
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;

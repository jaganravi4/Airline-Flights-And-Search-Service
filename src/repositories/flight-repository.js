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
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;

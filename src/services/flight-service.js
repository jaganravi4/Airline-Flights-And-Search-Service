const {
    FlightRepository,
    AirplaneRepository,
} = require("../repositories/index");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
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
}

module.exports = FlightService;

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Airports",
            [
                {
                    name: "Coimbatore International Airport",
                    address: "Peelamedu, Coimbatore",
                    cityId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Chennai International Airport",
                    address: "Meenambakkam, Chennai",
                    cityId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Kempegowda International Airport",
                    address: "Devanahalli, Bengaluru",
                    cityId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Chhatrapati Shivaji Maharaj International Airport",
                    address: "Sahar, Andheri East, Mumbai",
                    cityId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Indira Gandhi International Airport",
                    address: "Palam, New Delhi",
                    cityId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {},
};

const Captain = require("../models/captain.models");

const createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  capacity,
  vehicleType,
  plate,
}) => {
  const newCaptain = await Captain.create({
    fullName: {
      firstName,
      lastName,
    },

    email,
    password,
    vehicle: {
      color,
      capacity,
      vehicleType,
      plate,
    },
  });

  return newCaptain;
};

module.exports = createCaptain;

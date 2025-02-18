const { body, validationResult } = require("express-validator");

// can be reused by many routes
const validate = (validations) => {
  return async (req, res, next) => {
    // sequential processing, stops running validations chain if one fails.
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
    }

    next();
  };
};

const registerValidator = [
  body("firstName")
    .notEmpty()
    .withMessage("FirstName is Required")
    .isLength({ min: 3 })
    .withMessage("FirstName should be atleast of 3 character"),

  body("lastName")
    .isLength({ min: 3 })
    .withMessage("LastName should be atleast of 3 character"),

  body("email")
    .isEmail()
    .withMessage("Email should be in proper format")
    .notEmpty()
    .withMessage("Email is Required")
    .isLength({ min: 5 })
    .withMessage("Email Name should be atleast of 5 character"),

  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast of 8 character"),
];

const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Email should be in proper format")
    .notEmpty()
    .withMessage("Email is Required")
    .isLength({ min: 5 })
    .withMessage("Email Name should be atleast of 5 character"),

  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast of 8 character"),
];

const captainRegisterValidator = [
  body("fullName.firstName")
    .notEmpty()
    .withMessage("FirstName is Required")
    .isLength({ min: 3 })
    .withMessage("FirstName should be atleast of 3 character"),

  body("fullName.lastName")
    .isLength({ min: 3 })
    .withMessage("LastName should be atleast of 3 character"),

  body("email")
    .isEmail()
    .withMessage("Email should be in proper format")
    .notEmpty()
    .withMessage("Email is Required")
    .isLength({ min: 5 })
    .withMessage("Email Name should be atleast of 5 character"),

  body("password")
    .notEmpty()
    .withMessage("Password is Required")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast of 8 character"),
 
  body("vehicle.color")
    .notEmpty()
    .withMessage("You have to provide the color of your vechile"),
  body("vehicle.plate")
    .notEmpty()
    .withMessage("You have to provide the your number plate"),
  body("vehicle.capacity")
    .notEmpty()
    .withMessage("You have to provide the capcity of your vechile"),
  body("vehicle.vehicleType")
    .notEmpty()
    .withMessage("You have to provide the type of your vechile"),
];

module.exports = { validate, registerValidator, loginValidator,captainRegisterValidator };

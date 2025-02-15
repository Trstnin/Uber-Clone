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


module.exports = {validate , registerValidator}
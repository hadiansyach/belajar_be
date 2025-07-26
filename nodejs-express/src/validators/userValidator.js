const { body } = require("express-validator");

exports.createUservalidator = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
];

exports.updateUserValidator = [
  body("name")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("Email")
    .optional()
    .isEmail().withMessage("Invalid email format"),
];

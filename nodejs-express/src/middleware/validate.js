const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array().map((err) => ({
        field: err.fields,
        message: err.msg,
      })),
    });
  }

  next();
};

module.exports = validate;

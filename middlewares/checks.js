const { check } = require("express-validator");

const checks = [
  check("nombre")
    .notEmpty()
    .withMessage("el campo nombre es requerido")
    .isString()
    .withMessage("el campo nombre debe ser string"),
  check("raza")
    .notEmpty()
    .withMessage("el campo raza es requerido")
    .isString()
    .withMessage("el campo raza debe ser string"),
  check("color")
    .notEmpty()
    .withMessage("el campo color es requerido")
    .isString()
    .withMessage("el campo color debe ser string"),
  check("edad")
    .notEmpty()
    .withMessage("el campo edad es requerido")
    .isNumeric()
    .withMessage("el campo color debe ser number"),
];

module.exports = { checks };

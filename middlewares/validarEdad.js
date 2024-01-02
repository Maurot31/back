const { Dog } = require("../models/dogs");

const validarEdad = async (req, res, next) => {
  const edad = req.body.edad;
  if (edad > 20) {
    return res.status(400).json({
      error: "La edad del perro no puede ser mayor a 20 años",
    });
  }
  next();
};

module.exports = validarEdad;

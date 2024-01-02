const { Dog } = require("../models/dogs");

const validarId = async (req, res, next) => {
  try {
    const buscar = await Dog.findById(req.params.id);
    if (buscar !== null) {
      next();
    } else {
      res.status(400).json({
        msg: "el id" + req.params.id + "es inválido",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { validarId };

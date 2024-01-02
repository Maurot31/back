const { Dog } = require("../models/dogs");

const apiController = {
  async apiGet(req, res) {
    const listadoDePerros = await Dog.find();
    res.status(200).json(listadoDePerros);
  },

  async buscarPorId(req, res) {
    const buscar = await Dog.findById(req.params.id);
    res.status(200).json(buscar);
  },

  async apiPost(req, res) {
    try {
      const nuevoPerrito = new Dog(req.body);
      await nuevoPerrito.save();
      res.status(201).json(nuevoPerrito);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async apiPut(req, res) {
    await Dog.findByIdAndUpdate(req.params.id, req.body);
    const buscar = await Dog.findById(req.params.id);
    res.status(200).json(buscar);
  },

  async apiDelete(req, res) {
    await Dog.findByIdAndDelete(req.params.id);
    res.status(204).json({
      msg: "el perro con el" + req.params.id + " fue eliminado",
    });
  },
};

module.exports = apiController;

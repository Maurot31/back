const { Schema, model } = require("mongoose");

const schema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  edad: {
    type: Number,
    required: true,
  },
});

const Dog = model("Dog", schema);
module.exports = { Dog };

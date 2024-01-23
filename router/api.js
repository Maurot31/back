const express = require("express");
const { index } = require("../controller/indexController");
const apiController = require("../controller/apiController");
const { validarId } = require("../middlewares/validarId");
const { checks } = require("../middlewares/checks");
const { validarCheck } = require("../middlewares/validarChecks");
const validarEdad = require("../middlewares/validarEdad");
const axios = require("axios");
const router = express.Router();
// método http - expresión de la URN - middleware -> callback
router.get("/list", apiController.apiGet);

//http://localhost:3000/api/random-dog-image
router.get("/random-dog-image", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    const dogImage = response.data.message;
    res.status(200).json({ dogImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/perrito/:id", validarId, apiController.buscarPorId);
router.post("/crear", checks, validarCheck, validarEdad, apiController.apiPost);
router.put(
  "/editar/:id",
  validarId,
  checks,
  validarCheck,
  apiController.apiPut
);
router.delete("/borrar/:id", validarId, apiController.apiDelete);
module.exports = router;

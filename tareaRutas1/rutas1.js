const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando
// un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get("/bienvenida", (req, res) => {
  res.send(`Hola ${req.query.nombre} ${req.query.apellido}`);
});

// Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un
// res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).

app.get("/dividir/:dividendo/:divisor", (req, res) => {
  const divisor = parseInt(req.params.divisor);
  const dividendo = parseInt(req.params.dividendo);
  const resultado = dividendo / divisor;

  if (divisor === 0 || dividendo === 0) {
    res.json({ error: "No se puede dividir por cero" });
  } else {
    res.json({ resultado });
  }
});

// Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores
// que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
// http://localhost:3000/sumar/40/400

app.get("/sumar/:valor1/:valor2", (req, res) => {
  const valor1 = parseInt(req.params.valor1);
  const valor2 = parseInt(req.params.valor2);
  const resultado = valor1 + valor2;

  if (valor1 < 0 || valor2 < 0) {
    res.json({ error: "No se pueden enviar números menores a cero" });
  } else {
    res.json({ resultado });
  }
});

// Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el
// número es par debe devolver res.send("autorizado").

app.get("/par/:numero", (req, res) => {
  const numero = parseInt(req.query.numero);
  if (numero % 2 === 0) {
    res.send("Autorizado");
  } else {
    res.send("No autorizado");
  }
});

// Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).

app.get("/listadecompras", (req, res) => {
  res.json({
    producto1: req.query.producto1,
    producto2: req.query.producto2,
    producto3: req.query.producto3,
    producto4: req.query.producto4,
    producto5: req.query.producto5,
  });
});

"use strict";

//  Declaración de constantes
const express = require("express");
const path = require("path");
//const bodyParser = require("body-parser");
const index = require("./index.js");
const bayes = require("./bayes.js");
const kmedias = require("./kmedias.js");
const lloyd = require("./lloyd.js");

//  Creación de una aplicación express
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"));

//  Configuración de fichero estáticos
const ficherosEstaticos = path.join(__dirname, "public");
app.use(express.static(ficherosEstaticos));

//  Manejadores de ruta
app.use("/", index);
app.use("/bayes", bayes);   
app.use("/kmedias", kmedias);
app.use("/lloyd", lloyd);



//  Arranque del servidor
app.listen(3000, function (err) {
    if (err) {
        console.log("ERROR al iniciar el servidor");
    }
    else {
        console.log(`Servidor arrancado en el puerto 3000`);
    }
});


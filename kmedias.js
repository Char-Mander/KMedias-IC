"use strict";

// Declaración de constantes
const express = require("express");
const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");

//  Se declara el router
const kmedias = express.Router();

//  Se declara la variable del DAO
const dao = new DAO();

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

kmedias.get("/", function(request, response){

    response.status(200);
    let data = dao.getData();
    //Se resuelve el algoritmo
    response.render("kmedias", {data: data} )
});


module.exports = kmedias;
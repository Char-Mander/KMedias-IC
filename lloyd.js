"use strict";

// Declaración de constantes
const express = require("express");
const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");

//  Se declara el router
const lloyd = express.Router();

//  Se declara la variable del DAO
const dao = new DAO();

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

lloyd.get("/", function(request, response){

    response.status(200);
    let data = dao.getData();
    //Se resuelve el algoritmo
    response.render("lloyd", {data: data} )
});

module.exports = lloyd;
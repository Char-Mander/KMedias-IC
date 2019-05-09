"use strict";

// Declaración de constantes
const express = require("express");
const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");

//  Se declara el router
const bayes = express.Router();

//  Se declara la variable del DAO
const dao = new DAO();

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

bayes.get("/", function(request, response){

    response.status(200);
    let data = dao.getData();
    //Se resuelve el algoritmo
    response.render("bayes", {data: data} )
});


module.exports = bayes;
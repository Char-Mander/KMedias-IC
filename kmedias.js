"use strict";

// Declaración de constantes
const express = require("express");
const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");

//  Se declara el router
const kmedias = express.Router();

//  Se declara la variable del DAO
const dao = new DAO("Iris2Clases.txt");

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

kmedias.get("/", function(request, response){

    let data = dao.getData(function(error, d){
        if(error){
            response.status(500);
            response.render("index");
        }
        else{
            response.status(200);
        response.render("kmedias", {data: data} );
        }
    });
});


module.exports = kmedias;
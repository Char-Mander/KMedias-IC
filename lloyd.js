"use strict";

// Declaración de constantes
const express = require("express");
//const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");
const Classes = require("./classes.js");

//  Se declara el router
const lloyd = express.Router();

//  Se declara la variable del DAO
const dao = new DAO("Iris2Clases.txt");
const classes = new Classes();

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

lloyd.get("/", function(request, response){

    let data = dao.getData(function(error, d){
        if(error){
            response.status(500);
            response.render("index");
        }
        else{
            response.status(200);
            classes.classifyData(d, function(message){
                response.render("lloyd", {data: data} );
            });
        
        }
    });
});

module.exports = lloyd;
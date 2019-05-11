"use strict";

// Declaración de constantes
const express = require("express");
//const path = require("path");
const multer = require("multer");

//  Se declara el router
const index = express.Router();


// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });


index.get("/index", function(request, response){
    response.status(200);
    response.render("index");
});

index.get("/", function(request, response){
    response.status(200);
    response.redirect("/index");
});


module.exports = index;
"use strict";

// Declaración de constantes
const express = require("express");
//const path = require("path");
const multer = require("multer");
const DAO = require("./DAO.js");
const Classes = require("./classes.js");

//  Se declara el router
const bayes = express.Router();

//  Se declara la variable del DAO
const dao = new DAO("Iris2Clases.txt", "TestIris01.txt", "TestIris02.txt", "TestIris03.txt");
const classes = new Classes();

// MulterFactory
const multerFactory = multer({ storage: multer.memoryStorage() });

bayes.get("/", function(request, response){


    dao.getData(function(error, d){
        if(error){
            response.status(500);
            response.render("index");
        }
        else{
            response.status(200);
            classes.classifyData(d, function(message1){
                classes.setClassVector(function(message2){
                    let listOfSamples = getSamples();
                    if(listOfSamples.some(n => n === null)){
                        response.status(500);
                        response.render("index");
                    }
                    else{
                        response.status(200);
                       console.log(listOfSamples);
                        response.render("bayes", {data: d});
                    }
               
                });
            });
            
        }
    });
    //Se resuelve el algoritmo
    
});

function getSamples(){
    let samples = [];
    //Se crea la clase samples y se guarda todo ahí 
    dao.getSample1(function(error, s1){
        if(error){
           samples.push(null);
        }
        else{
            samples.push(s1);
            dao.getSample2(function(error, s2){
                if(error){
                    samples.push(null);
                }
                else{
                   samples.push(s2);
                    dao.getSample3(function(error, s3){
                        if(error){
                            samples.push(null);
                        }
                        else{
                            samples.push(s3);
                            return samples;
                        }
                    });
                    
                }
            });
            
        }
    });
    return samples;
}


module.exports = bayes;
"use strict";
//  Declaración de constantes
const fs = require('fs');

class DAO {
    constructor(file, sample1, sample2, sample3) {
        this.file = file;
        this.sample1 = sample1;
        this.sample2 = sample2;
        this.sample3 = sample3;
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
    getData(callback) {
        fs.readFile(this.file, (err, data) => {
            if (err) {
                callback(new Error("Error al leer el fichero de las clases")), null;
            }
            else {
                let d = data.toString().split("\r\n");
                let list = dataFormat(d);
                callback(null, list);
            }
        });
    }

    getSample1(callback){
        fs.readFile(this.sample1, (err, data)  => {
            if(err){
                callback(new Error("Error al leer el fichero de los ejemplos"), null);
            }
            else{
                let d = data.toString();
                let list = samplesFormat(d);
            //    console.log("Sample 1 en el dao: " + list);
                callback(null, list);
            }
        });
    }

    getSample2(callback){
        fs.readFile(this.sample2, (err, data)  => {
            if(err){
                callback(new Error("Error al leer el fichero de los ejemplos"), null);
            }
            else{
                let d = data.toString();
                let list = samplesFormat(d);
            //    console.log("Sample 2 en el dao: " + list);
                callback(null, list);
            }
        });
    }

    getSample3(callback){
        fs.readFile(this.sample3, (err, data)  => {
            if(err){
                callback(new Error("Error al leer el fichero de los ejemplos"), null);
            }
            else{
                let d = data.toString();
                let list = samplesFormat(d);
            //    console.log("Sample 3 en el dao: " + list);
                callback(null, list);
            }
        });
    }


}

function dataFormat(data){
    let list = [];
   
    for(let i=0; i<data.length; i++){
        let row = data[i].split(",");
        let objaux = {
            "vector": [],
            "name": ""
        }
        for(let j=0; j<4; j++){
            objaux.vector.push(row[j]);
        }
        objaux.name = row[row.length-1];
        list.push(objaux);
    }

    return list;
}

function samplesFormat(sample){
    let s = {"vector": [], "name": ""};
    
    let aux = sample.split(",");
    s.name = aux[aux.length-1];
    for(let i = 0; i<aux.length-1; i++){
        s.vector.push(aux[i]);
    }
    
    return s;
}

module.exports = DAO;
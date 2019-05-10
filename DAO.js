"use strict";
//  Declaración de constantes
const fs = require('fs');

class DAO {
    constructor(file) {
        this.file = file;
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
    getData(callback) {
        fs.readFile(this.file, (err, data) => {
            if (err) {
                callback(new Error("Error al leer el fichero")), null;
            }
            else {
                let d = data.toString().split("\r\n");
                let list = dataFormat(d);
                callback(null, list);
            }
        })
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

module.exports = DAO;
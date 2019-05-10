"use strict";
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
                callback(null, data.toString().split("\r\n"));
            }
        })
    }

}
module.exports = DAO;
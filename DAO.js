"use strict";
const fs = require('fs');
class DAO {
    constructor(file) {
        this.file = file;
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
    getData(callback) {
        /*
                 connection.query(sql, [id], function(err, resultado){
                          connection.release();¡
                if (err) {
                    callback(new Error("Error de acceso a la base de datos"), null);
                } else {
                    callback(null, data[0]);
                }
        
                 });*/
        fs.readFile(this.file, (err, data) => {
            if (err) {
                callback(new Error("Error al leer el fichero")), null;
            }
            else {
                callback(null, data.toString());
            }
        })
    }

}
module.exports = DAO;
"use strict";

class DAO {
    constructor(file) {
        this.file = file;
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
    getData(callback) {

        // connection.query(sql, [id], function(err, resultado){
        //           connection.release();¡
        if (err) {
            callback(new Error("Error de acceso a la base de datos"), null);
        } else {
            callback(null, data[0]);
        }

        // });
        //}
    }
}
module.exports = DAO;
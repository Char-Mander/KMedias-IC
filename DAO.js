"use strict";

class DAO {
    constructor(file) {
        this.file = file;
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
    getData(callback) {

        // connection.query(sql, [id], function(err, resultado){
        //           connection.release();¡
        //if (err) {
        //    callback(new Error("Error de acceso a la base de datos"), null);
        //} else {
        //callback(null, "Prueba");
        //}

        // });
        //}

        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", this.file, false);
        rawFile.onreadystatechange = function () {
            let allText = "";
            if (rawFile.readyState === 4) {
                if (rawFile.readyState === 200 || rawFile.status === 0) {
                    allText += rawFile.responseText + "\n";
                    console.log(allText);
                }
            }
            callback(allText);
        }
      
        rawFile.send(null);
    }
}
module.exports = DAO;
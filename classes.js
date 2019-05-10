"use strict";


class Classes {
    constructor() {
        this.setosa = {
            "name": "Iris-setosa",
            "muestras": [],
            "vector": []
        }
        this.versicolor = {
            "name": "Iris-versicolor",
            "muestras": [],
            "vector": []
        }
    }
    /*Devuelve todos los datos del usuario cuyo email es el introducido*/
   classifyData(data, callback) {
      for(let i=0; i<data.length; i++){
            if(data[i].name === this.setosa.name){
                this.setosa.muestras.push(data[i]);
            }
            else{
                this.versicolor.muestras.push(data[i]);
            }
       }
       
       callback("Los datos se han clasificado correctamente");
    }

    setClassVector(callback){
        //Sin implementar
        let m1 = [0,0,0,0], m2= [0,0,0,0];
        
        for(let i=0; i<this.setosa.muestras[0].vector.length; i++){
            for(let j=0; j<this.setosa.muestras.length; j++){
                m1[i] += parseFloat(this.setosa.muestras[j].vector[i]);
                m2[i] += parseFloat(this.versicolor.muestras[j].vector[i]);
            }
           this.setosa.vector[i] = m1[i] / this.setosa.muestras.length;
           this.versicolor.vector[i] = m2[i] / this.versicolor.muestras.length;
        }
        
        callback("Vectores calculados correctamente");
    }

    getIrisSetosa(){
        return this.setosa;
    }

    getIrisVersicolor(){
        return this.versicolor;
    }

}

module.exports = Classes;
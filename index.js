var algorithm = function (name) {
    "use strict";


    // --------------------------------- CLASE QUE SACA LOS DATOS DE LOS FICHEROS ---------------------------------

    //  Declaración de constantes necesarias para el DAO
    // const fs = require('fs');

    class DAO {
        constructor(file) {
            this.file = file;
            this.data = [5.1, 3.5, 1.4, 0.2, "Iris-setosa",
                4.9, 3.0, 1.4, 0.2, "Iris-setosa",
                4.7, 3.2, 1.3, 0.2, "Iris-setosa",
                4.6, 3.1, 1.5, 0.2, "Iris-setosa",
                5.0, 3.6, 1.4, 0.2, "Iris-setosa",
                5.4, 3.9, 1.7, 0.4, "Iris-setosa",
                4.6, 3.4, 1.4, 0.3, "Iris-setosa",
                5.0, 3.4, 1.5, 0.2, "Iris-setosa",
                4.4, 2.9, 1.4, 0.2, "Iris-setosa",
                4.9, 3.1, 1.5, 0.1, "Iris-setosa",
                5.4, 3.7, 1.5, 0.2, "Iris-setosa",
                4.8, 3.4, 1.6, 0.2, "Iris-setosa",
                4.8, 3.0, 1.4, 0.1, "Iris-setosa",
                4.3, 3.0, 1.1, 0.1, "Iris-setosa",
                5.8, 4.0, 1.2, 0.2, "Iris-setosa",
                5.7, 4.4, 1.5, 0.4, "Iris-setosa",
                5.4, 3.9, 1.3, 0.4, "Iris-setosa",
                5.1, 3.5, 1.4, 0.3, "Iris-setosa",
                5.7, 3.8, 1.7, 0.3, "Iris-setosa",
                5.1, 3.8, 1.5, 0.3, "Iris-setosa",
                5.4, 3.4, 1.7, 0.2, "Iris-setosa",
                5.1, 3.7, 1.5, 0.4, "Iris-setosa",
                4.6, 3.6, 1.0, 0.2, "Iris-setosa",
                5.1, 3.3, 1.7, 0.5, "Iris-setosa",
                4.8, 3.4, 1.9, 0.2, "Iris-setosa",
                5.0, 3.0, 1.6, 0.2, "Iris-setosa",
                5.0, 3.4, 1.6, 0.4, "Iris-setosa",
                5.2, 3.5, 1.5, 0.2, "Iris-setosa",
                5.2, 3.4, 1.4, 0.2, "Iris-setosa",
                4.7, 3.2, 1.6, 0.2, "Iris-setosa",
                4.8, 3.1, 1.6, 0.2, "Iris-setosa",
                5.4, 3.4, 1.5, 0.4, "Iris-setosa",
                5.2, 4.1, 1.5, 0.1, "Iris-setosa",
                5.5, 4.2, 1.4, 0.2, "Iris-setosa",
                4.9, 3.1, 1.5, 0.1, "Iris-setosa",
                5.0, 3.2, 1.2, 0.2, "Iris-setosa",
                5.5, 3.5, 1.3, 0.2, "Iris-setosa",
                4.9, 3.1, 1.5, 0.1, "Iris-setosa",
                4.4, 3.0, 1.3, 0.2, "Iris-setosa",
                5.1, 3.4, 1.5, 0.2, "Iris-setosa",
                5.0, 3.5, 1.3, 0.3, "Iris-setosa",
                4.5, 2.3, 1.3, 0.3, "Iris-setosa",
                4.4, 3.2, 1.3, 0.2, "Iris-setosa",
                5.0, 3.5, 1.6, 0.6, "Iris-setosa",
                5.1, 3.8, 1.9, 0.4, "Iris-setosa",
                4.8, 3.0, 1.4, 0.3, "Iris-setosa",
                5.1, 3.8, 1.6, 0.2, "Iris-setosa",
                4.6, 3.2, 1.4, 0.2, "Iris-setosa",
                5.3, 3.7, 1.5, 0.2, "Iris-setosa",
                5.0, 3.3, 1.4, 0.2, "Iris-setosa",
                7.0, 3.2, 4.7, 1.4, "Iris-versicolor",
                6.4, 3.2, 4.5, 1.5, "Iris-versicolor",
                6.9, 3.1, 4.9, 1.5, "Iris-versicolor",
                5.5, 2.3, 4.0, 1.3, "Iris-versicolor",
                6.5, 2.8, 4.6, 1.5, "Iris-versicolor",
                5.7, 2.8, 4.5, 1.3, "Iris-versicolor",
                6.3, 3.3, 4.7, 1.6, "Iris-versicolor",
                4.9, 2.4, 3.3, 1.0, "Iris-versicolor",
                6.6, 2.9, 4.6, 1.3, "Iris-versicolor",
                5.2, 2.7, 3.9, 1.4, "Iris-versicolor",
                5.0, 2.0, 3.5, 1.0, "Iris-versicolor",
                5.9, 3.0, 4.2, 1.5, "Iris-versicolor",
                6.0, 2.2, 4.0, 1.0, "Iris-versicolor",
                6.1, 2.9, 4.7, 1.4, "Iris-versicolor",
                5.6, 2.9, 3.6, 1.3, "Iris-versicolor",
                6.7, 3.1, 4.4, 1.4, "Iris-versicolor",
                5.6, 3.0, 4.5, 1.5, "Iris-versicolor",
                5.8, 2.7, 4.1, 1.0, "Iris-versicolor",
                6.2, 2.2, 4.5, 1.5, "Iris-versicolor",
                5.6, 2.5, 3.9, 1.1, "Iris-versicolor",
                5.9, 3.2, 4.8, 1.8, "Iris-versicolor",
                6.1, 2.8, 4.0, 1.3, "Iris-versicolor",
                6.3, 2.5, 4.9, 1.5, "Iris-versicolor",
                6.1, 2.8, 4.7, 1.2, "Iris-versicolor",
                6.4, 2.9, 4.3, 1.3, "Iris-versicolor",
                6.6, 3.0, 4.4, 1.4, "Iris-versicolor",
                6.8, 2.8, 4.8, 1.4, "Iris-versicolor",
                6.7, 3.0, 5.0, 1.7, "Iris-versicolor",
                6.0, 2.9, 4.5, 1.5, "Iris-versicolor",
                5.7, 2.6, 3.5, 1.0, "Iris-versicolor",
                5.5, 2.4, 3.8, 1.1, "Iris-versicolor",
                5.5, 2.4, 3.7, 1.0, "Iris-versicolor",
                5.8, 2.7, 3.9, 1.2, "Iris-versicolor",
                6.0, 2.7, 5.1, 1.6, "Iris-versicolor",
                5.4, 3.0, 4.5, 1.5, "Iris-versicolor",
                6.0, 3.4, 4.5, 1.6, "Iris-versicolor",
                6.7, 3.1, 4.7, 1.5, "Iris-versicolor",
                6.3, 2.3, 4.4, 1.3, "Iris-versicolor",
                5.6, 3.0, 4.1, 1.3, "Iris-versicolor",
                5.5, 2.5, 4.0, 1.3, "Iris-versicolor",
                5.5, 2.6, 4.4, 1.2, "Iris-versicolor",
                6.1, 3.0, 4.6, 1.4, "Iris-versicolor",
                5.8, 2.6, 4.0, 1.2, "Iris-versicolor",
                5.0, 2.3, 3.3, 1.0, "Iris-versicolor",
                5.6, 2.7, 4.2, 1.3, "Iris-versicolor",
                5.7, 3.0, 4.2, 1.2, "Iris-versicolor",
                5.7, 2.9, 4.2, 1.3, "Iris-versicolor",
                6.2, 2.9, 4.3, 1.3, "Iris-versicolor",
                5.1, 2.5, 3.0, 1.1, "Iris-versicolor",
                5.7, 2.8, 4.1, 1.3, "Iris-versicolor"];
        }
        //Devuelve todos los datos del usuario cuyo email es el introducido
        getData(callback) {
            let list = dataFormat(this.data);
            callback(null, list);
        }

    }

    function dataFormat(data) {
        let list = [];
        let vaux = [];
        for (let i = 1; i < data.length + 1; i++) {
            if (i % 5 === 0) {
                let objaux = {
                    "vector": vaux,
                    "name": data[i - 1],
                }
                list.push(objaux);
                vaux = [];
            }
            else {
                vaux.push(data[i - 1]);
            }

        }
        //console.log("Lista con formato: " + list[0].name);
        return list;
    }



    // --------------------------------- CLASE QUE ORGANIZA LOS DATOS POR CLASE ---------------------------------

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

            this.all = {
                "name": "All",
                "muestras": []
            }

        }

        classifyData(data, callback) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === this.setosa.name) {
                    this.setosa.muestras.push(data[i]);
                }
                else {
                    this.versicolor.muestras.push(data[i]);
                }

                this.all.muestras.push(data[i]);
            }
            console.log(this.all.muestras);
            callback("Los datos se han clasificado correctamente");
        }


        setVectorSetosa(v) {
            this.setosa.vector = v;
        }

        getVectorSetosa() {
            return this.setosa.vector;
        }

        setVectorVersicolor(v) {
            this.setosa.vector = v;
        }

        getVectorVersicolor() {
            return this.versicolor.vector;
        }

        getAll(){
            return this.all;
        }

        getIrisSetosa() {
            return this.setosa;
        }

        getIrisVersicolor() {
            return this.versicolor;
        }

    }





    // --------------------------------- CLASE QUE CONTIENE CADA MUESTRA ---------------------------------

    class Samples {
        constructor() {
            this.sample1 = {
                "class": "Iris-setosa",
                "vector": [5.1, 3.5, 1.4, 0.2]
            }
            this.sample2 = {
                "class": "Iris-versicolor",
                "vector": [6.9, 3.1, 4.9, 1.5]
            }
            this.sample2 = {
                "class": "Iris-setosa",
                "vector": [5.0, 3.4, 1.5, 0.2]
            }
        }


        getSample1() {
            return this.sample1;
        }

        getSample2() {
            return this.sample2;
        }

        getSample3() {
            return this.sample3;
        }

    }



    //Elementos necesarios para todos los algoritmos
    var dao;
    if (dao === undefined)
        dao = new DAO("Iris2Clases.txt", "TestIris01.txt", "TestIris02.txt", "TestIris03.txt");

    var classes;
    if (classes === undefined)
        classes = new Classes();


    var samples;
    if (samples === undefined)
        samples = new Samples();

    var c1, c2;
    if (c1 === undefined)
        c1 = [4.6, 3.0, 4.0, 0.0];
    if (c2 === undefined)
        c2 = [6.8, 3.4, 4.6, 0.7];


    //Elementos de cada algoritmo particular
    var bayes;
    var kmedias;
    var lloyd;


    //DEJAMOS PREPARADOS LOS DATOS

    var loadData = () => {
        dao.getData(function (error, d) {
            if (error) {
                console.log("Error al cargar los datos de los ficheros");
            }
            else {
                classes.classifyData(d, function (message1) {
                    classes.setVectorSetosa(c1);
                    classes.setVectorVersicolor(c2);
                    console.log("Centros asignados correctamente");
                });

            }
        });
    };


    loadData();




    // --------------------------------- ALGORITMO BAYES ---------------------------------

    class Bayes {
        constructor(classes, samples) {
            this.classes = classes;
            this.samples = samples;
        }

        executeBayes() {

            let result = $(`<div class = "container" id = "bayesContainer"> <div class='row'>
            <div class='col'> 1 of 2 bayes </div>
            <div class='col'> 2 of 2 bayes </div>
            </div>
            <div class='row'>
                <div class='col'> 1 of 3 bayes </div>
                <div class='col'> 2 of 3 bayes </div>
            </div> </div>`);
            $( "body" ).append(result); 
        }

        mostrar(){
            
        }


    };



    // --------------------------------- ALGORITMO K-MEDIAS ---------------------------------

    class KMedias {
        constructor(classes, samples, c1, c2) {
            this.data = classes.getAll();
            this.samples = samples;
            this.tolerancia = 0.01;
            this.exp = 2;
            this.oldC1 = c1;
            this.oldC2 = c2;
            this.newC1 = 0;
            this.newC2 = 0;
        }

        executeKMedias() {
            iterarCentros(null, "");
           /* let res1, res2; 
            let data1={}, data2={}; 
            let list = this.data;

            //Primera iteración
            for(let i = 0; i< list.length; i++){
                res1 = 0;
                res2 = 0;

                for(let j=0; j<list[i].vector.length; j++){
                res1 += Math.pow((parseFloat(list[i].vector[j]) - parseFloat(this.oldC1[j])), this.exp);
                res2 += Math.pow((parseFloat(list[i].vector[j]) - parseFloat(this.oldC2[j])), this.exp);
                }
                res1 / list[i].vector.length;
                res2 / list[i].vector.length;

                if(res1<res2){
                    data1.push(list[i].vector);
                }
                else{
                    data2.push(list[i].vector);
                }
                
            }

            this.newC1 = recalcularCentros(data1, this.oldC1);
            this.newC2 = recalcularCentros(data2, this.oldC2);

            if(this.newC1 < this.newC2){
                this.oldC1 = iterarCentros(this.newC1, "c1");
            }
            else{
                this.oldC2 = iterarCentros(this.newC2, "c2");
            }
*/
            mostrarKmedias();
        }


        iterarCentros(center, name){
            let res1, res2; 
            let data1={}, data2={}; 
            let center1, center2;

            switch(name){
                case "c1":  
                center1 = center;
                center2 = this.oldC2;
                break;

                case "c2": 
                center1 = this.oldC1;
                center2 = center;
                break;

                default:  
                center1 = this.oldC1;
                center2 = this.oldC2;
                break;
            }

            let list = this.data;
    
            for(let i = 0; i< list.length; i++){
                res1 = 0;
                res2 = 0;
    
                for(let j=0; j<list[i].vector.length; j++){
                res1 += Math.pow((parseFloat(list[i].vector[j]) - parseFloat(center1[j])), this.exp);
                res2 += Math.pow((parseFloat(list[i].vector[j]) - parseFloat(center2[j])), this.exp);
                }
                res1 / list[i].vector.length;
                res2 / list[i].vector.length;
    
                if(res1<res2){
                    data1.push(list[i].vector);
                }
                else{
                    data2.push(list[i].vector);
                }
                
            }

            this.newC1 = recalcularCentros(data1, center1);
            this.newC2 = recalcularCentros(data2, center2);

            if(this.newC1 < this.newC2){
                this.oldC2 = this.newC2;
                this.oldC1 = iterarCentros(this.newC1, "c1");
            }
            else{
                this.oldC1 = this.newC1;
                this.oldC2 = iterarCentros(this.newC2, "c2");
            }

        }

        recalcularCentros(data, center){
            let res=0;
            for(let i = 0; i<data.length; i++){

            }
        }
    
        mostrarKMedias(){
            let result = $(`<div class = "container" id = "kmediasContainer"> <div class='row'>
            <div class='col'> 1 of 2 kmedias </div>
            <div class='col'> 2 of 2 kmedias </div>
            </div>
            <div class='row'>
                <div class='col'> 1 of 3 kmedias </div>
                <div class='col'> 2 of 3 kmedias </div>
            </div> </div>`);
    
            $( "body" ).append(result); 
        }


    };


    // --------------------------------- ALGORITMO K-MEDIAS ---------------------------------

    class Lloyd {
        constructor(classes, samples) {
            this.classes = classes;
            this.samples = samples;
        }

        executeLloyd() {
            let result = $(`<div class = "container" id = "bayesContainer"><div class='row'>
            <div class='col'> 1 of 2 lloyd </div>
            <div class='col'> 2 of 2 lloyd </div>
            </div>
            <div class='row'>
                <div class='col'> 1 of 3 lloyd </div>
                <div class='col'> 2 of 3 lloyd </div>
            </div></div>`);
           $( "body" ).append(result);
        }

    };

    switch (name) {
        case "bayes": if (bayes === undefined){
            bayes = new Bayes(classes, samples);
            }

            bayes.executeBayes();
            break;
        case "kmedias": if (kmedias === undefined){
            kmedias = new KMedias(classes, samples);
            }

            kmedias.executeKMedias();
            break;
        case "lloyd": if (lloyd === undefined){
            lloyd = new Lloyd(classes, samples);
            }
            
            lloyd.executeLloyd();
            break;
    }

};
var algorithm = function (name) {
    "use strict";


    // --------------------------------- CLASE QUE SACA LOS DATOS DE LOS FICHEROS ---------------------------------

    //  Declaración de constantes necesarias para el DAO

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
                vaux.push(Number(data[i - 1]));
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
                "muestras": [],
                "centros": []
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

                this.all.muestras.push(data[i].vector);
            }

            callback("Los datos se han clasificado correctamente");
        }


        setVectores() {
            let m1 = [0, 0, 0, 0], m2 = [0, 0, 0, 0];

            for (let i = 0; i < this.setosa.muestras[0].vector.length; i++) {
                for (let j = 0; j < this.setosa.muestras.length; j++) {
                    m1[i] += this.setosa.muestras[j].vector[i];
                    m2[i] += this.versicolor.muestras[j].vector[i];
                }
                this.setosa.vector.push(m1[i] / this.setosa.muestras.length);
                this.versicolor.vector.push(m2[i] / this.versicolor.muestras.length);
            }

            this.all.centros.push(this.setosa.vector);
            this.all.centros.push(this.versicolor.vector);
            
        }

        getVectorSetosa() {
            return this.setosa.vector;
        }

        getVectorVersicolor() {
            return this.versicolor.vector;
        }

        getAllMuestras() {
            return this.all.muestras;
        }

        getAllCentros() {
            return [this.setosa.vector, this.versicolor.vector];
        }

        getIrisSetosa() {
            return this.setosa;
        }

        getIrisVersicolor() {
            return this.versicolor;
        }

        getTotalMuestras() {
            return this.all.muestras.length;
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
            this.sample3 = {
                "class": "Iris-setosa",
                "vector": [5.0, 3.4, 1.5, 0.2]
            }
        }


        getSample1() {
            return this.sample1.vector;
        }

        getSample2() {
            return this.sample2.vector;
        }

        getSample3() {
            return this.sample3.vector;
        }

        getAllSamples() {
            return [this.sample1.vector, this.sample2.vector, this.sample3.vector];
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


    //Elementos de cada algoritmo particular
    var kmedias;


    //DEJAMOS PREPARADOS LOS DATOS

    var loadData = () => {
        dao.getData(function (error, d) {
            if (error) {
                console.log("Error al cargar los datos de los ficheros");
            }
            else {
                classes.classifyData(d, function (message1) {
                    classes.setVectores();
                    console.log("Centros asignados correctamente haciendo la media de todas las muestras");
                });

            }
        });
    };

    //Primero coge todos los datos de los ficheros
    loadData();



    // --------------------------------- ALGORITMO K-MEDIAS ---------------------------------

    class KMedias {
        constructor(data, samples) {
            this.samples = samples;
            this.data = data;
            this.filasMatriz = classes.getAllCentros().length;
            this.centers = [[4.6, 3.0, 4.0, 0.0], [6.8, 3.4, 4.6, 0.7]];
            this.old_centers = [];
            this.centers.forEach(row => this.old_centers.push(row));
            this.tolerancia = 0.01;
            this.b = 2;
            this.mostrar = [];
        }

        mostrarKMedias() {
            let result = $(`<div class = "container" id = "kmediasContainer"> 
            <div class='row'>
            <div class='col'> La muestra testIris01 (${this.samples.getSample1()}) pertenece a la clase ${this.mostrar[0].clase} </div>
            <div class='col'> Su grado de pertenencia es de ${this.mostrar[0].pertenencia} </div>
            </div>
            <div class='row'>
            <div class='col'> La muestra testIris02 (${this.samples.getSample2()}) pertenece a la clase ${this.mostrar[1].clase} </div>
            <div class='col'> Su grado de pertenencia es de ${this.mostrar[1].pertenencia} </div>
            </div> 
            <div class='row'>
            <div class='col'> La muestra testIris03 (${this.samples.getSample3()}) pertenece a la clase ${this.mostrar[2].clase} </div>
            <div class='col'> Su grado de pertenencia es de ${this.mostrar[2].pertenencia} </div>
            </div>
            </div>`);

            $("body").append(result);
        }

        //Calcula la distancia entre una muestra y un centro
        calcularD(muestra, centro) {
            let res = 0;
            
            for (let i = 0; i < muestra.length; i++) {
                res += Math.pow(Number(muestra[i]) - Number(centro[i]), 2);
            }
            
            return res;
        }

        //Calcula la pertenencia de una muestra respecto a cada centro y devuelve una matriz con cada resultado
        calcularPertenencia(sample) {
            let d1 = this.calcularD(sample, this.centers[0]);
            let d2 = this.calcularD(sample, this.centers[1]);

            let p1 = (1 / d1) / ((1 / d1) + (1 / d2));
           
            let p2 = (1 / d2) / ((1 / d1) + (1 / d2));
           

            return [p1, p2];
        }

        //Según el grado de pertenencia de cada muestra al centro, lo asigna a una clase o a otra
        asignarAClase() {
            let ps = [];
            ps.push(this.calcularPertenencia(this.samples.getSample1()));
            ps.push(this.calcularPertenencia(this.samples.getSample2()));
            ps.push(this.calcularPertenencia(this.samples.getSample3()));
            
            for (let i = 0; i < ps.length; i++) {
                let aux = { clase: "", pertenencia: 0 };
                if (ps[i][0] > ps[i][1]) {
                    aux.clase = "Iris setosa";
                    aux.pertenencia = ps[i][0];
                }
                else {
                    aux.clase = "Iris versicolor";
                    aux.pertenencia = ps[i][1];
                }
                this.mostrar.push(aux);
            }
        }



        //Itera hasta que los centros estén bien (según el grado de tolerancia)
        executeKMedias() {
            let end = false;
            while (!end) {
                this.matrix = [];
                this.data.forEach((element, index) => {
                    let belongingDegree = this.gradoPertenencia(0, index);
                    this.matrix.push([belongingDegree, 1 - belongingDegree]);
                });
                this.reasignarCentros();
                let value_centers;
                this.centers.forEach((element, index) => {
                    value_centers = this.calcularD(element, this.old_centers[index]);
                    if (Math.sqrt(value_centers) < this.tolerancia) {
                        end = true;
                    } else {
                        end = false;
                    }
                });
                this.old_centers = [];
                this.centers.forEach(row => this.old_centers.push(row));
            }

        }
        
        //Calcula el grado de pertenencia entre una muestra y un único centro
        gradoPertenencia(i, j) {
            let d = 1 / this.calcularD(this.data[j], this.centers[i]);
            let total = 0;
            for (let index = 0; index < this.filasMatriz; index++) {
                total += 1 / this.calcularD(this.data[j], this.centers[index]);
            }
            return d / total;
        }

        //Reasigna los centros
        reasignarCentros() {
            for (let i = 0; i < this.filasMatriz; i++) {
                this.centers[i] = [];
                let dividendo = [0, 0, 0, 0];
                let divisor = 0;
                let contador = 0;
                this.matrix.forEach((element, index) => {
                    contador++;
                    divisor += (Math.pow(element[i], 2));
                    this.data[index].forEach((elem, j) => {
                        contador++;
                        dividendo[j] += (Math.pow(element[i], 2) * elem);
                    });
                });
                dividendo.forEach((element, index) => {
                    this.centers[i].push(element / divisor);
                });

            }
        }
    }


    switch (name) {
        case "kmedias": if (kmedias === undefined) {
            kmedias = new KMedias(classes.getAllMuestras(), samples);
        }
            kmedias.executeKMedias();
            kmedias.asignarAClase();
            kmedias.mostrarKMedias();
            break;
    }

};
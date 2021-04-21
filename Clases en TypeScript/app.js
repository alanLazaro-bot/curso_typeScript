"use strict";
//Clases
class Avenger {
    //Constructores
    //Es una funcion que es ejecutada cuando se crea una nueva instancia de ese objeto
    //Permite inicializar variable so ejecutar algun tipo de codigo antes de que nuestra clase pueda ser utilizada en otro lado.
    constructor(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    //Esto es un método
    bio() {
        let mensaje = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }
}
let antMan = new Avenger("Antman", "cap", "Scott Lang");
/*Las propiedades pueden ser public, protected, private

public: son todas las propiedades por defecto y pueden modificarse en cualquier momento

protected: solo puede ser accesada dentro de la clase original o sus herencias

private: solo pueden ser modificados los valores o propiedades dentro de la misma clase.

*/
//Los métodos tambien puedne ser public, protected y private
//Herencia, super y definicion  de propiedades en el constructor
//
class Avenger2 {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    getNombre() {
        return this.nombre;
    }
}
class Xmen extends Avenger2 {
    constructor(a, b) {
        super(a, b);
    }
    getNombre() {
        return super.getNombre(); // Este es un método público que accede a una propiedad desde un metodo protegido
    }
}
let ciclope = new Xmen("Cíclope", "Scott Summers");
console.log(ciclope);
/////////////////////////////////////////////////////////////////////////////////
//gets y sets
//Es una manera de accesar propiedades pero de una forma controlada
/*
get: por defecto debe retornar algo.

set:agarran un parametro y se lo establecen a una propiedad
 
 */
class Avenger3 {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return "No tiene un nombre el avenger";
        }
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
//Propiedades y métodos estáticos
class Xmen2 {
    constructor() {
    }
    static crearXmen() {
        return new Xmen2();
    }
}
Xmen2.nombre = "Wolverine";
let wolverine = new Xmen2();
//las propiedades y metodos estaticos se pueden llamar sin instanciar la clase.
//Clases Abtractas
class Mutantes {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
class Xmen3 extends Mutantes {
}
let wolverine2 = new Xmen3("Wolverine", "Logan");
//abstract impide crear instancias de las clases.
//Sirve para crear un molde de las clases y heredar esas propiedades y metodos a otras clases.
//Constructores privados
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static llamarApocalipsis() {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... el único");
        }
        return Apocalipsis.instancia;
    }
}
let real = Apocalipsis.llamarApocalipsis();
//Esto es para que exista en nuestro programa una unica instancia de la clase.
/*y si queremos volverlo a llamar o usar propiedades y metodos que ya han sido definidos se pueda hacer de esta manera.*/

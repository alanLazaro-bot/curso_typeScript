//Clases

class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

//Constructores

//Es una funcion que es ejecutada cuando se crea una nueva instancia de ese objeto

//Permite inicializar variable so ejecutar algun tipo de codigo antes de que nuestra clase pueda ser utilizada en otro lado.

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo= equipo;
        this.nombreReal = nombreReal;


    }
    //Esto es un método

    public bio():void{
        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`
        console.log(mensaje)

    }
}

let antMan:Avenger = new Avenger("Antman", "cap", "Scott Lang" )

/*Las propiedades pueden ser public, protected, private

public: son todas las propiedades por defecto y pueden modificarse en cualquier momento

protected: solo puede ser accesada dentro de la clase original o sus herencias

private: solo pueden ser modificados los valores o propiedades dentro de la misma clase.

*/

//Los métodos tambien puedne ser public, protected y private


//Herencia, super y definicion  de propiedades en el constructor
//

class Avenger2{
   

    constructor ( public nombre:string, private nombreReal:string){
        
        }

    protected getNombre():string{
        return this.nombre;

    }

}

class Xmen extends Avenger2{

    constructor(a:string, b:string){
        super(a,b)
    }
    public getNombre():string{
        return super.getNombre();// Este es un método público que accede a una propiedad desde un metodo protegido

    }


}

let ciclope:Xmen = new Xmen ("Cíclope", "Scott Summers");

console.log(ciclope)


/////////////////////////////////////////////////////////////////////////////////

//gets y sets

//Es una manera de accesar propiedades pero de una forma controlada
/*
get: por defecto debe retornar algo. 

set:agarran un parametro y se lo establecen a una propiedad
 
 */
class Avenger3{

    private _nombre:string;
    constructor( nombre:string){
        this._nombre = nombre
    }
    get nombre():string{

        if(this._nombre){
            return this._nombre;
        
        } else{
            return "No tiene un nombre el avenger";
        }
    }

    set nombre(nombre:string){
        this._nombre = nombre;

    }
}


//Propiedades y métodos estáticos

class Xmen2{
    static nombre:string = "Wolverine";
    constructor(){

    }
    static crearXmen(){


        return new Xmen2();
    }
}

let wolverine = new Xmen2()

//las propiedades y metodos estaticos se pueden llamar sin instanciar la clase.



//Clases Abtractas

abstract class Mutantes {

    constructor (public nombre:string, public nombreReal:string){

    }
}

class Xmen3 extends Mutantes{

}

let wolverine2 = new Xmen3("Wolverine", "Logan");

//abstract impide crear instancias de las clases.
//Sirve para crear un molde de las clases y heredar esas propiedades y metodos a otras clases.


//Constructores privados


class Apocalipsis{

    static instancia:Apocalipsis;

    private constructor(public nombre:string){

   

    }

    static llamarApocalipsis(){
        if (!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... el único")
        }
        return Apocalipsis.instancia
    }

}

let real = Apocalipsis.llamarApocalipsis();


//Esto es para que exista en nuestro programa una unica instancia de la clase.
/*y si queremos volverlo a llamar o usar propiedades y metodos que ya han sido definidos se pueda hacer de esta manera.*/





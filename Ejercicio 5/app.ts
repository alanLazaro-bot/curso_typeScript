// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Automovil{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void
}


function conducirBatimovil( auto:Automovil ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil:Automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker{
  reir:boolean,
  comer?:boolean,
  llorar?:boolean
}

let guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Joker ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudadano{
  (a:string[]): number 
}
let ciudadGotica:Ciudadano

ciudadGotica= function( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Citizen{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(nombre:string, edad:number, sexo:string, estadoCivil:string):void
}

class Persona implements Citizen{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(){
    console.log(`La persona es ${this.nombre} de sexo ${this.sexo}, tiene ${this.edad} años u su estado civil es ${this.estadoCivil}`)
  }

}




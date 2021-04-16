// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones

enum Fuerzas{
  flash=5,
  superman=100,
  batman=1,
  aquaman=0
}

let fuerzaFlash = Fuerzas.flash;
let fuerzaSuperman = Fuerzas.superman;
let fuerzaBatman = Fuerzas.batman;
let fuerzaAquaman=  Fuerzas.aquaman

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:any = "100";
let largoDelPoder:number = (<string>poder).length;
console.log( largoDelPoder );

let poder2:string = "100";
let lardoDelPoder:number=poder.length;

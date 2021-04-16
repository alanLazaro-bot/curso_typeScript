"use strict";
// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerzas;
(function (Fuerzas) {
    Fuerzas[Fuerzas["flash"] = 5] = "flash";
    Fuerzas[Fuerzas["superman"] = 100] = "superman";
    Fuerzas[Fuerzas["batman"] = 1] = "batman";
    Fuerzas[Fuerzas["aquaman"] = 0] = "aquaman";
})(Fuerzas || (Fuerzas = {}));
var fuerzaFlash = Fuerzas.flash;
var fuerzaSuperman = Fuerzas.superman;
var fuerzaBatman = Fuerzas.batman;
var fuerzaAquaman = Fuerzas.aquaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
var poder2 = "100";
var lardoDelPoder = poder.length;

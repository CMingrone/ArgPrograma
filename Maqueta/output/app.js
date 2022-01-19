"use strict";
let message = 'Hello Word';
console.log(message);
function cambiarParrafo(unParrafo) {
    let nuevoParrafo = prompt("Ingrese el nuevo valor:");
    document.getElementById(unParrafo).innerHTML = nuevoParrafo;
}
/*
var persona={fullname:"Carlos Antonio Mingrone",puesto:"Desarrollador Frontend",ubicacion:"Buenos Aires"};
*/
class Persona {
    constructor(name, position, ubication) {
        this.fullname = name;
        this.position = position;
        this.ubication = ubication;
    }
    saludar() {
        console.log("Bienvenido " + this.fullname);
    }
    get Fullname() {
        return this.fullname;
    }
    set Fullname(name) {
        this.fullname = name;
    }
}
var persona = new Persona("Carlos A. Mingrone", "Desarrollador web fullstack", "Buenos Aires");
persona.Fullname = "Carlos A. Mingrone";
persona.saludar();
document.getElementById("nombre").innerHTML = persona.Fullname;
document.getElementById("perfil").innerHTML = persona.position;
document.getElementById("residencia").innerHTML = persona.ubication;

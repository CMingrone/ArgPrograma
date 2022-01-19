let message: string = 'Hello Word';
console.log(message);

function cambiarParrafo(unParrafo:string)
        {
            let nuevoParrafo=prompt("Ingrese el nuevo valor:") as string;
            (document.getElementById(unParrafo) as HTMLParagraphElement).innerHTML=nuevoParrafo as string;
        }
/*
var persona={fullname:"Carlos Antonio Mingrone",puesto:"Desarrollador Frontend",ubicacion:"Buenos Aires"};
*/

class Persona{
    private fullname:string;
    readonly position:string;
    readonly ubication:string;

    constructor(name:string,position:string,ubication:string)
    {
        this.fullname=name;
        this.position=position;
        this.ubication=ubication;

    }
    saludar()
    {
        console.log("Bienvenido " + this.fullname);
    }
    get Fullname():string{
        return this.fullname;
    }
    set Fullname(name:string){
        this.fullname=name;
    }
}

var persona:Persona =new Persona("Carlos A. Mingrone","Desarrollador web fullstack","Buenos Aires");

persona.Fullname="Carlos A. Mingrone";
persona.saludar();


(document.getElementById("nombre") as HTMLParagraphElement).innerHTML=persona.Fullname;
(document.getElementById("perfil") as HTMLParagraphElement).innerHTML=persona.position;
(document.getElementById("residencia") as HTMLParagraphElement).innerHTML=persona.ubication;


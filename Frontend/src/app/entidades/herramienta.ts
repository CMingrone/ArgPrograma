export class Herramienta{
    nombre: string;
    progreso: number;

    constructor(nombre:string, progreso:number){

        this.nombre= nombre;
        this.progreso=progreso;

    }

    get getNombre(){
        return this.nombre;
      }
    get getProgreso(){
        return this.progreso;
      }      

}


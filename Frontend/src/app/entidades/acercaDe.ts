export class AcercaDe{
    comentario: string;

    constructor(comentario:string){

        this.comentario= comentario;
    }

    get getComentario(){
        return this.comentario;
      }

}

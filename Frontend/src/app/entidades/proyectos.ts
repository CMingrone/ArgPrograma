export class Proyecto{
    empresa: string;
    titulo: string;
    descripcion: string;
    url: string;
    img: string;

    constructor(empresa:string, titulo:string, descripcion:string, url:string, img:string){

        this.empresa= empresa;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.url=url;
        this.img=img;
    }

    get getEmpresa(){
        return this.empresa;
      }
    get getTitulo(){
        return this.titulo;
      }      
    get getDescripcion(){
        return this.descripcion;
      }
    get getUrl(){
        return this.url;
      }
    get getImg(){
        return this.img;
      }
}


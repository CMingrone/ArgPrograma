export class Persona{
    fullName: string;
    position: string;
    ubication: string;
    img:string;

    constructor(fullName:string, position:string, ubication:string, img:string){

        this.fullName= fullName;
        this.position=position;
        this.ubication=ubication;
        this.img=img;
    }

    get getFullName(){
        return this.fullName;
      }
    get getPisition(){
        return this.position;
      }      
    get getUbication(){
        return this.ubication;
      }
    get getImg(){
        return this.img;
      }
}


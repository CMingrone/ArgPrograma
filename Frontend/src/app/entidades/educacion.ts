export class Educacion{
    school: string;
    title: string;
    start: number;
    end: number;
    img:string;

    constructor(school:string, title:string, start:number, end:number, img:string){

        this.school= school;
        this.title=title;
        this.start=start;
        this.end=end;
        this.img=img;
    }

    get getschool(){
        return this.school;
      }
    get getPisition(){
        return this.title;
      }      
    get getstart(){
        return this.start;
      }
    get getend(){
        return this.end;
      }
    get getImg(){
        return this.img;
      }
}


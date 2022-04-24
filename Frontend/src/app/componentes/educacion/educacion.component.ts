import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  usuarioAutenticado:boolean=true;//deberia estar en false
  form:FormGroup;

  constructor(private servicioEducacion:EducacionService, private miForm:FormBuilder) {
    this.form=this.miForm.group({
      school:['', [Validators.required]],
      title:['',[Validators.required]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      img:['',[Validators.required]]

    })
   }
   get school(){
    return this.form.get("school");
  }
  get title(){
    return this.form.get("title");
  }
  get start(){
    return this.form.get("start");
  }
  get end(){
    return this.form.get("end");
  }
  get img(){
    return this.form.get("img");
  }
  ngOnInit(): void {
    this.servicioEducacion.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacion=data["educacion"];
    })
  }

  guardarDatos(){
    
    if(this.form.valid){

          let school=this.form.get('school')?.value;
          let title=this.form.get('title')?.value;
          let start=this.form.get('start')?.value;
          let end=this.form.get('end')?.value;
          let img=this.form.get('img')?.value;

          let educacionEditar = new Educacion(school,title,start,end,img);
          this.servicioEducacion.editarDatos(educacionEditar).subscribe({
              //modificar los datos del componente por los ingresados por el usuario
            next: (data) => {
              this.educacion=educacionEditar
              this.form.reset();
              document.getElementById("cerrarModalEducacion")?.click();
            }, 
            error: (error) => {
              alert('No se puedo actualizar el registro. Por favor intente nuevamente mas tarde');
           
            }
          });
        
          
    }
    else{
          alert('Hay errores');
          this.form.markAllAsTouched()
    }
  }
  mostrarDatos(unaEducacion:any){
      this.form.get('school')?.setValue(unaEducacion.school);
      this.form.get('title')?.setValue(unaEducacion.title);
      this.form.get('start')?.setValue(unaEducacion.start);
      this.form.get('end')?.setValue(unaEducacion.end);
      this.form.get('img')?.setValue(unaEducacion.img);

  }
}

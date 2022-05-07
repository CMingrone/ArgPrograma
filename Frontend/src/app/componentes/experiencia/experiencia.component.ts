import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  usuarioAutenticado:boolean=true;//deberia estar en false
  form:FormGroup;

  constructor(private servicioExperiencia:ExperienciaService, private miForm:FormBuilder) {
    this.form=this.miForm.group({
      empresa:['', [Validators.required]],
      puesto:['',[Validators.required]],
      tareas:['',[Validators.required]],
      tipo:['',[Validators.required]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      img:['',[Validators.required]]

    })
   }
   get empresa(){
    return this.form.get("empresa");
  }
  get puesto(){
    return this.form.get("puesto");
  }
  get tareas(){
    return this.form.get("tareas");
  }
  get tipo(){
    return this.form.get("tipo");
  }
  get end(){
    return this.form.get("end");
  }
  get img(){
    return this.form.get("img");
  }
  ngOnInit(): void {
    this.servicioExperiencia.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experiencia=data["experiencia"];
    })
  }

  guardarDatos(){
    
    if(this.form.valid){

          let empresa=this.form.get('empresa')?.value;
          let puesto=this.form.get('puesto')?.value;
          let tareas=this.form.get('tareas')?.value;
          let tipo=this.form.get('tipo')?.value;
          let start=this.form.get('start')?.value;
          let end=this.form.get('end')?.value;
          let img=this.form.get('img')?.value;

          let experienciaEditar = new Experiencia(this.experiencia.id,empresa,puesto,tareas,tipo,start,end,img);
          this.servicioExperiencia.editarDatos(experienciaEditar).subscribe({
              //modificar los datos del componente por los ingresados por el usuario
            next: (data) => {
              this.experiencia=experienciaEditar
              this.form.reset();
              document.getElementById("cerrarModalExperiencia")?.click();
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
  mostrarDatos(unaExperiencia:any){
      this.form.get('empresa')?.setValue(unaExperiencia.empresa);
      this.form.get('puesto')?.setValue(unaExperiencia.puesto);
      this.form.get('tareas')?.setValue(unaExperiencia.tareas);
      this.form.get('tipo')?.setValue(unaExperiencia.tipo);
      this.form.get('start')?.setValue(unaExperiencia.start);
      this.form.get('end')?.setValue(unaExperiencia.end);
      this.form.get('img')?.setValue(unaExperiencia.img);

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
import { Proyecto } from 'src/app/entidades/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;
  usuarioAutenticado:boolean=true;
  form:FormGroup;

  constructor(private servicioProyectos:ProyectosService, private miForm:FormBuilder) {
    this.form=this.miForm.group({
      empresa:['', [Validators.required]],
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      url:['',[Validators.required]],
      img:['',[Validators.required]]

    })
   }
   get empresa(){
    return this.form.get("empresa");
  }
  get titulo(){
    return this.form.get("titulo");
  }
  get descripcion(){
    return this.form.get("descripcion");
  }
  get url(){
    return this.form.get("url");
  }
  get img(){
    return this.form.get("img");
  }
  ngOnInit(): void {
    this.servicioProyectos.obtenerProyectos().subscribe(data=>{
      console.log(data);
      this.proyectos=data["proyectos"];
    })
  }

  guardarDatos(){
    
    if(this.form.valid){

          let empresa=this.form.get('empresa')?.value;
          let titulo=this.form.get('titulo')?.value;
          let descripcion=this.form.get('descripcion')?.value;
          let url=this.form.get('url')?.value;
          let img=this.form.get('img')?.value;

          let proyectosEditar = new Proyecto(empresa,titulo,descripcion,url,img);
          this.servicioProyectos.editarDatos(proyectosEditar).subscribe({
              //modificar los datos del componente por los ingresados por el usuario
            next: (data) => {
              this.proyectos=proyectosEditar
              this.form.reset();
              document.getElementById("cerrarModalProyectos")?.click();
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
  mostrarDatos(unProyecto:any){
      this.form.get('empresa')?.setValue(unProyecto.empresa);
      this.form.get('titulo')?.setValue(unProyecto.titulo);
      this.form.get('descripcion')?.setValue(unProyecto.descripcion);
      this.form.get('url')?.setValue(unProyecto.url);
      this.form.get('img')?.setValue(unProyecto.img);

  }
}

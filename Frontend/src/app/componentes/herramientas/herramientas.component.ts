import { Component, OnInit } from '@angular/core';
import { HerramientasService } from 'src/app/servicios/herramientas.service';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Herramienta } from 'src/app/entidades/herramienta';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  herramientas:any;
  usuarioAutenticado:boolean=true;//deberia estar en false
  form:FormGroup;
  
  constructor(private servicioDeHerramientas:HerramientasService,  private miForm:FormBuilder) { 
    this.form=this.miForm.group({
      nombre:['', [Validators.required]],
      progreso:['',[Validators.required]]


    }) 
  
  }
    get nombre(){
      return this.form.get("nombre");
    }
    get progreso(){
      return this.form.get("progreso");
    }
 
 




  ngOnInit(): void {
    this.servicioDeHerramientas.obtenerHerramientas().subscribe(data=>{
      console.log(data);
      this.herramientas=data["herramientas"];
    })
  }
  guardarDatos(){
    
    if(this.form.valid){

          let nombre=this.form.get('nombre')?.value;
          let progreso=this.form.get('progreso')?.value;
  

          let herramientasEditar = new Herramienta(nombre,progreso);
          this.servicioDeHerramientas.editarDatos(herramientasEditar).subscribe({
              //modificar los datos del componente por los ingresados por el usuario
            next: (data) => {
              this.herramientas=herramientasEditar
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
  mostrarDatos(unaHerramienta:any){
      this.form.get('nombre')?.setValue(unaHerramienta.nombre);
      this.form.get('progreso')?.setValue(unaHerramienta.progreso);


  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcercaDe } from 'src/app/entidades/acercaDe';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  acercaDe:any;
  usuarioAutenticado:boolean=true;//deberia estar en false
  form:FormGroup;

  constructor(private servicioAcercaDe:AcercaDeService, private miForm: FormBuilder) { 
    this.form=this.miForm.group({
      comentario:['', [Validators.required, Validators.minLength(30)]]
    } )
}

get comentario(){
  return this.form.get("comentario");
}

ngOnInit(): void {
  this.servicioAcercaDe.obtenerDatos().subscribe(data => {
    console.log(data);
    this.acercaDe=data["acercaDe"];
  })

}
guardarDatos(){
    
  if(this.form.valid){

        let comentario=this.form.get('comentario')?.value;

        let comentarioEditar = new AcercaDe(comentario);
        this.servicioAcercaDe.editarDatos(comentarioEditar).subscribe({
            //modificar los datos del componente por los ingresados por el usuario
          next: (data) => {
            this.acercaDe=comentarioEditar
            this.form.reset();
            document.getElementById("cerrarModalAcercaDe")?.click();
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
mostrarDatosActuales(){
  this.form.get('comentario')?.setValue(this.acercaDe.comentario);
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;//deberia estar en false
  form:FormGroup;

  constructor(private miServicio:DatosPersonalesService, private miFormBuild:FormBuilder) {
    this.form=this.miFormBuild.group({
      fullName:['', [Validators.required, Validators.minLength(5)]],
      position:['',[Validators.required]],
      ubication:['',[Validators.required]],
      url:['',[Validators.required]]

    })
  }

  get fullName(){
    return this.form.get("fullName");
  }
  get position(){
    return this.form.get("position");
  }
  get ubication(){
    return this.form.get("ubication");
  }
  get url(){
    return this.form.get("url");
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersonales().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
  })
  }

  guardarEncabezado(){
    
    if(this.form.valid){

          let fullName=this.form.get('fullName')?.value;
          let position=this.form.get('position')?.value;
          let ubication=this.form.get('ubication')?.value;
          let url=this.form.get('url')?.value;

          let personaEditar = new Persona(fullName,position,ubication,url);
          this.miServicio.editarDatosPersonales(personaEditar).subscribe({
              //modificar los datos del componente por los ingresados por el usuario
            next: (data) => {
              this.persona=personaEditar
              this.form.reset();
              document.getElementById("cerrarModalEncabezado")?.click();
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
  mostrarDatosEncabezado(){
      this.form.get('fullName')?.setValue(this.persona.fullName);
      this.form.get('position')?.setValue(this.persona.position);
      this.form.get('ubication')?.setValue(this.persona.ubication);
      this.form.get('url')?.setValue(this.persona.image);

  }
}

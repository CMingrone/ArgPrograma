import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      url:['https://',[Validators.required, Validators.pattern('https?://.+')]]

    })
  }

  get fullName(){
    return this.form.get("fullName");
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersonales().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
  })
  }

  guardarEncabezado(){
    if(this.form.valid){
          alert('enviar los datos al servicio(servidor)');
          this.form.reset();
          document.getElementById("cerrarModalEncabezado")?.click();
    }
    else{
          alert('Hay errores');
          this.form.markAllAsTouched();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  constructor(private miServicio:DatosPersonalesService) {}

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersonales().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia : any;
  constructor( private servicioDeExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    this.servicioDeExperiencia.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experiencia=data["experiencia"];
    })
  }
}

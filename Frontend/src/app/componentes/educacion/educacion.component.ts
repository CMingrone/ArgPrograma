import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private miServicio2:EducacionService) { }

  ngOnInit(): void {
    this.miServicio2.obtenerEducacion().subscribe(data2=>{
      console.log(data2);
      this.educacion=data2["educacion"];
    })
  }
}

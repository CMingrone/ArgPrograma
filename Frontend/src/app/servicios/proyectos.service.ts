import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) {
    console.log("El servicio de proyectos esta corriendo");
   };

    obtenerProyectos():Observable<any>{
      return this.http.get('./assets/data/proyectos.json');
    }
    editarDatos(proyectos:Proyecto):Observable<any>{
      return this.http.post('http://localhost:3000/posts',proyectos);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Herramienta } from '../entidades/herramienta';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  constructor(private http:HttpClient) {
    console.log("El servicio de herramientas esta corriendo");
   }
   obtenerHerramientas():Observable<any>{
    return this.http.get('./assets/data/herramientas.json');
  }
  editarDatos(herramienta:Herramienta):Observable<any>{
    return this.http.post('http://localhost:3000/posts',herramienta);
  }
}

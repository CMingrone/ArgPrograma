import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http:HttpClient) {
    console.log("El servicio de datos personales esta corriendo");
   }
   obtenerDatosPersonales():Observable<any>{
     return this.http.get('./assets/data/persona.json');
   }
   editarDatosPersonales(persona:Persona):Observable<any>{
     return this.http.post('http://localhost:3000/posts',persona);
   }
}

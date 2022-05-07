import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
urll : string = "http://localhost:8080/persona"
  constructor(private http:HttpClient) {
    console.log("El servicio de datos personales esta corriendo");
   }
   obtenerDatosPersonales(id:number):Observable<Persona>{
     return this.http.get<Persona>(this.urll+"/"+id);
   }
   editarDatosPersonales(persona:Persona):Observable<any>{
     return this.http.put(this.urll,persona);
   }
}

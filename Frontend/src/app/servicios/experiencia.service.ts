import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) {
    console.log("El servicio de experiencia esta corriendo");
   }
   obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/experiencia.json');
  }
}

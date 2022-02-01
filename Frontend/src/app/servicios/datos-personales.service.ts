import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http:HttpClient) {
    console.log("El servicio esta corriendo");
   }
   obtenerDatosPersonales():Observable<any>{
     return this.http.get('./assets/data/persona.json');
   }
}

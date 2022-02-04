import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http2:HttpClient) {
    console.log("El servicio esta corriendo");
   };

    obtenerEducacion():Observable<any>{
      return this.http2.get('./assets/data/educacion.json');
    }
  
}

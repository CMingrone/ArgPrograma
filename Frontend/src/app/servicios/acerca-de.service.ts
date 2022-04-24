import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../entidades/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http:HttpClient) {
    console.log("El servicio acercaDe esta corriendo");
   }
   obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/acercaDe.json');
  }
  editarDatos(comentario:AcercaDe):Observable<any>{
    return this.http.post('http://localhost:3000/posts',comentario);
  }
}

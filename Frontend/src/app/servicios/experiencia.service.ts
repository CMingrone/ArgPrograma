import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) {
    console.log("El servicio de educacion esta corriendo");
   };

    obtenerExperiencia():Observable<any>{
      return this.http.get('./assets/data/experiencia.json');
    }
    editarDatos(experiencia:Experiencia):Observable<any>{
      return this.http.post('http://localhost:3000/posts',experiencia);
    }
}

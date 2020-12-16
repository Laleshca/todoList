import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {

  tareas : Tarea[] = [];
  url  = environment.apiUrl;
  endpoint = environment.endpoints.tareas;

  constructor(private http: HttpClient) { 
  }

  agregarTarea(tarea : Tarea){
    const url = this.url + this.endpoint;
    return this.http.post<Tarea>(url,tarea);
  }

  obtenerTarea(){
    const url = this.url + this.endpoint;
    return this.http.get<Tarea[]>(url);
  }

  generarId() {​​
    return parseInt((Math.random() * 10000000000).toString());
  }
    
  eliminarTarea(tareaId: number){
    const url = `${this.url}${this.endpoint}/${tareaId}`;
    return this.http.delete(url);

  }

  actualizarTarea(tarea: Tarea){
    const url = `${this.url}${this.endpoint}/${tarea.id}`;
    return this.http.put(url,tarea);
  }

  editarTarea(tareaId: number)
  {
    const url = `${this.url}${this.endpoint}/${tareaId}`;
    return this.http.get<Tarea[]>(url);
  }
}

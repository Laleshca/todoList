import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tareaDescripcion: string;
  id: number;
  tareas$ = new Observable<Tarea[]>();
  tareas : Tarea[]=[];
  
  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute,
    private router: Router) { 

  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((parms) =>
    {
      this.id = parms['id'].toString();
      this.tareaDescripcion = parms['descripcion'].toString();
      this.tareas$ = this.todoService.editarTarea(parms['id'].toString());
      this.tareas$.subscribe(tareas =>  {
        this.tareas = tareas;
        console.log(this.tareas);
      });
    });
  }

  actualizarTarea(tareaDescripcion: string){
    const tarea : Tarea = {
      id : this.id,
      descripcion : tareaDescripcion,
      hecho : true
    }
    this.todoService.actualizarTarea(tarea).subscribe((res) => {
      Swal.fire({
        title: 'Correcto',
        text: 'Se actualizo la tarea',
        icon: 'success'
      }).then(() => {
        this.router.navigate(['/lista'])
        this.tareaDescripcion='';
      })
    },
    err =>
    {
      Swal.fire({
        title: 'Ups!',
        text: 'Ocurrió un error al intentar actualizar la tarea',
        icon: 'error'
      })
    });
  }
}

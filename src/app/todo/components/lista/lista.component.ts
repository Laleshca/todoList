import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../../../shared/models/tarea.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

 @Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, DoCheck {

  tareasTerminadas : number = 0;

  @Input() tareas :Tarea[] = []
  @Output() eliminarTarea = new EventEmitter()
  @Output() actualizarTarea = new EventEmitter()

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.tareasTerminadas = this.tareas?.filter(t => t.hecho).length
  }
  seleccionar(tarea: Tarea){
    this.tareas.forEach(t=>{
      if(t.id === tarea.id){
        t.hecho = !t.hecho
        this.actualizarTarea.emit(t);
      }
    })
    console.log(this.tareas);
  }
  eliminar(tareaId: number){
    Swal.fire({
      icon: 'warning',
      title: '¿Estas seguro que deseas borrar la tarea ' + tareaId,
      cancelButtonText: 'No borrar',
      confirmButtonText: 'Si borrar',
      showCancelButton: true,
    }).then(value =>{
      if(value.isConfirmed){
          this.eliminarTarea.emit(tareaId);
        }
      }

    )
    console.log(tareaId);
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import { ListaComponent } from './components/lista/lista.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { TodoService } from './services/todo.service';
import { FormsModule, NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UpdateComponent } from './pages/update/update.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent, UpdateComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatCheckboxModule
    ],
  exports:
  [
    ListaPageComponent,
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }

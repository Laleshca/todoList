import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';
import { UpdateComponent } from './todo/pages/update/update.component';

const routes: Routes = [
  { path: 'lista', component: ListaPageComponent },
  { path: 'update/:id/:descripcion', component: UpdateComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

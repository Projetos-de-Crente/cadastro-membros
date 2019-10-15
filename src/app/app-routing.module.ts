import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembroRoutes } from './membros/membros-routing.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/membros/listar',
    pathMatch: 'full'
  },
  ...MembroRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

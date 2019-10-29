import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembroRoutes } from './paginas/membros/membros-routing.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ...MembroRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

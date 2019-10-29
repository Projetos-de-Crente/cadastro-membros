import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembroRoutes } from './paginas/membros/membros-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { HEADER } from './compartilhado/componentes/header/header';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { header: HEADER.home }
  },
  ...MembroRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

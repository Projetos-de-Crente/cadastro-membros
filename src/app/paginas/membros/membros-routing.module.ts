import { Routes } from "@angular/router";
import { ListarComponent } from "./listar/listar.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { HEADER } from "src/app/compartilhado/componentes/header/header";

export const MembroRoutes: Routes = [
  {
    path: "membros",
    redirectTo: "membros/listar"
  },
  {
    path: "membros/listar",
    component: ListarComponent,
    data: { header: HEADER.lista }
  },
  {
    path: "membros/cadastrar",
    component: CadastrarComponent,
    data: { header: HEADER.formulario }
  },
  {
    path: "membros/editar/:id",
    component: CadastrarComponent
  }
];

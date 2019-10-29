import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from '../home/home.component';

export const MembroRoutes: Routes = [

    {
        path: 'membros',
        redirectTo: 'membros/listar'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'membros/listar',
        component: ListarComponent
    },
    {
        path: 'membros/cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'membros/editar/:id',
        component: CadastrarComponent
    }
];

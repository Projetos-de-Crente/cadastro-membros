import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const MembroRoutes: Routes = [

    {
        path: 'membros',
        redirectTo: 'membros/listar'
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

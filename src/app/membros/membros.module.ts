import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MembroService } from './shared/membro.service';
import { StatusDirective } from './shared/status.directive';
@NgModule({
  declarations: [CadastrarComponent, ListarComponent, StatusDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    MembroService
  ]
})
export class MembrosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MembroService } from 'src/app/compartilhado/servicos/membro.service';
import { HomeComponent } from '../home/home.component';
import { ComponentesModule } from 'src/app/compartilhado/componentes/componentes.module';
import { CompartilhadoModule } from 'src/app/compartilhado/compartilhado.module';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  declarations: [CadastrarComponent, ListarComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentesModule,
    CompartilhadoModule,
    ParticlesModule
  ],
  providers: [
    MembroService
  ]
})
export class MembrosModule { }

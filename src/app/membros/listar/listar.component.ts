import { Component, OnInit } from '@angular/core';
import { Membro } from '../shared/membro.model';
import { MembroService } from '../shared/membro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  membros: Membro[];

  constructor(private membroService: MembroService) { }

  ngOnInit() {
    this.membros = this.listarMembros();
  }

  listarMembros(): Membro[] {
    return this.membroService.listarMembros();
  }

  removerMembro($event: any, membro: Membro): void {
    $event.preventDefault();

    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você está removendo a membro '${membro.nome}'.`,
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Membro removido.',
          confirmButtonText: 'Ok',
          type: 'success'
        }
        );
        this.membroService.removerMembro(membro.id);
        this.membros = this.listarMembros();
      }
    });
  }

  alterarStatusMembro($event: any, membro: Membro): void {
    $event.preventDefault();

    Swal.fire({
      title: 'Você tem certeza?',
      // tslint:disable-next-line: max-line-length
      text: membro.inativo ? `Você está marcando o membro '${membro.nome}' como ativo.` : `Você está marcando o membro '${membro.nome}' como inativo.`,
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Sucesso!',
          text: membro.inativo ? 'Membro ativado.' : 'Membro desativado.',
          confirmButtonText: 'Ok',
          type: 'success',
          background: '#fff'
        }
        );
        this.membroService.alterarStatusMembro(membro.id);
        this.membros = this.listarMembros();
      }
    });
  }

}

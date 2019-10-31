import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Membro } from 'src/app/compartilhado/modelos/membro.model';
import { MembroService } from 'src/app/compartilhado/servicos/membro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @ViewChild('formMembro', { static: true }) formMembro: NgForm;
  membro: Membro;

  public isEdit = false;

  constructor(
    private membroService: MembroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.membro = new Membro();
    // tslint:disable-next-line: no-string-literal
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEdit = true;
      this.membro = this.membroService.buscarMembroPorId(id);
    }
  }

  action(): void {
    this.isEdit ? this.atualizarMembro() : this.cadastrarMembro();
  }

  cadastrarMembro(): void {
    if (this.formMembro.form.valid) {
      this.membroService.cadastrarMembro(this.membro);
      this.router.navigate(['/membros']);
    }
  }

  atualizarMembro(): void {
    if (this.formMembro.form.valid) {
      this.membroService.atualizarMembro(this.membro);
      this.router.navigate(['/membros']);
    }
  }

  cancelarForm(): void {
    Swal.fire({
      title: 'Você tem certeza que deseja sair?',
      text: 'Todos os dados serão perdidos.',
      type: 'warning',
      background: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#23272B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/membros']);
      }
    });

  }
}

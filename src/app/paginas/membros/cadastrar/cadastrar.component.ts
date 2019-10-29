import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Membro } from 'src/app/compartilhado/membro.model';
import { MembroService } from 'src/app/compartilhado/membro.service';

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

  calcularIdade(): number {
    return 18;
  }

}

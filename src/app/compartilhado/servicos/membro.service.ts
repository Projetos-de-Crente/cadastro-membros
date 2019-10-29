import { Injectable } from '@angular/core';
import { Membro } from '../modelos/membro.model';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor() { }
  listarMembros(): Membro[] {
    // tslint:disable-next-line: no-string-literal
    const membros = localStorage['membros'];
    return membros ? JSON.parse(membros) : [];
  }

  cadastrarMembro(membro: Membro): void {
    const membros = this.listarMembros();
    // getTime() retorna os milissegundos passados entre 1 de Janeiro de 1970 até a data atual.
    membro.id = new Date().getTime();
    membros.push(membro);
    // tslint:disable-next-line: no-string-literal
    localStorage['membros'] = JSON.stringify(membros);
  }

  buscarMembroPorId(id: number): Membro {
    const membros: Membro[] = this.listarMembros();
    return membros.find(item => item.id === Number(id));
  }

  atualizarMembro(membro: Membro): void {
    const membros: Membro[] = this.listarMembros();
    membros.forEach((obj, index, objs) => {
      if (membro.id === obj.id) {
        objs[index] = membro;
      }
    });
    // tslint:disable-next-line: no-string-literal
    localStorage['membros'] = JSON.stringify(membros);
  }

  removerMembro(id: number): void {
    let membros: Membro[] = this.listarMembros();
    membros = membros.filter(membro => membro.id !== id);
    // tslint:disable-next-line: no-string-literal
    localStorage['membros'] = JSON.stringify(membros);
  }

  alterarStatusMembro(id: number): void {
    const membros: Membro[] = this.listarMembros();
    membros.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].inativo = !obj.inativo;
      }
    });
    // tslint:disable-next-line: no-string-literal
    localStorage['membros'] = JSON.stringify(membros);
  }

}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public data = this.route.snapshot.data.header;

  constructor(private router: Router, private route: ActivatedRoute) { }

  public acao() {
    this.data.titulo === 'Lista de Membros' ? this.cancelarForm() : this.irPara();
  }
  public irPara(): void {
    this.router.navigate([...this.data.url]);
  }

  public cancelarForm(): void {
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
        this.router.navigate([...this.data.url]);
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { InscricaoService } from '../inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  styleUrl: './cadastrar-inscricao.css',
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
  nome: string = '';
  email: string = '';
  oficina: string = '';

  constructor(
    private inscricaoService: InscricaoService,
    private router: Router
  ) {}

  cadastrar(): void {
    if (this.nome.trim() !== '' && this.email.trim() !== '' && this.oficina !== '') {
      this.inscricaoService.adicionar(this.nome, this.email, this.oficina);
      this.nome = '';
      this.email = '';
      this.oficina = '';
      this.router.navigate(['/lista']);
    }
  }
}
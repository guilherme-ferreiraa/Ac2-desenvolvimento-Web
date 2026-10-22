import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao-service';
import { Inscricao } from '../models/inscricao.model';

@Component({
  selector: 'app-lista-inscricao',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './lista-inscricao.css',
  templateUrl: './lista-inscricao.html',
})
export class ListaInscricao {
  constructor(public inscricaoService: InscricaoService) {}

  get inscricoes(): Inscricao[] {
    return this.inscricaoService.listar();
  }

  confirmar(id: number): void {
    this.inscricaoService.confirmarInscricao(id);
  }

  remover(id: number): void {
    this.inscricaoService.remover(id);
  }
}
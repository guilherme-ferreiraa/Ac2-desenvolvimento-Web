import { Injectable } from '@angular/core';
import { Inscricao } from './models/inscricao.model';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(nome: string, email: string, oficina: string): void {
    const novaInscricao: Inscricao = {
      id: this.proximoId++,
      nome: nome,
      email: email,
      oficina: oficina,
      confirmada: false
    };
    this.inscricoes.push(novaInscricao);
  }

  confirmarInscricao(id: number): void {
    const inscricao = this.inscricoes.find(item => item.id === id);
    if (inscricao) {
      inscricao.confirmada = true;
    }
  }

  remover(id: number): void {
    const index = this.inscricoes.findIndex(item => item.id === id);
    if (index !== -1) {
      this.inscricoes.splice(index, 1);
    }
  }


  getTotal(): number {
    return this.inscricoes.length;
  }

  getConfirmadas(): number {
    return this.inscricoes.filter(item => item.confirmada).length;
  }

  getPendentes(): number {
    return this.inscricoes.filter(item => !item.confirmada).length;
  }
}

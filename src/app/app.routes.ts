import { Routes } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricao } from './lista-inscricao/lista-inscricao';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarInscricao },
  { path: 'lista', component: ListaInscricao }
];
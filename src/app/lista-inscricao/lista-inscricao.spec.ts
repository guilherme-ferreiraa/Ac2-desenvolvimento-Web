import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaInscricao } from './lista-inscricao';

describe('ListaInscricao', () => {
  let component: ListaInscricao;
  let fixture: ComponentFixture<ListaInscricao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInscricao],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInscricao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

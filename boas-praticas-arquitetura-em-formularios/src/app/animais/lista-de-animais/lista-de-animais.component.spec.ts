import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAnimaisComponent } from './lista-de-animais.component';

describe('ListaDeAnimaisComponent', () => {
  let component: ListaDeAnimaisComponent;
  let fixture: ComponentFixture<ListaDeAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

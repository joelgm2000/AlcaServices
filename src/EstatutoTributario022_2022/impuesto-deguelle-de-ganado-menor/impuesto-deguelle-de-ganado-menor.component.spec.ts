import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoDeguelleDeGanadoMenorComponent } from './impuesto-deguelle-de-ganado-menor.component';

describe('ImpuestoDeguelleDeGanadoMenorComponent', () => {
  let component: ImpuestoDeguelleDeGanadoMenorComponent;
  let fixture: ComponentFixture<ImpuestoDeguelleDeGanadoMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoDeguelleDeGanadoMenorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoDeguelleDeGanadoMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

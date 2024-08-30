import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobretasaAlaGasolinaComponent } from './sobretasa-ala-gasolina.component';

describe('SobretasaAlaGasolinaComponent', () => {
  let component: SobretasaAlaGasolinaComponent;
  let fixture: ComponentFixture<SobretasaAlaGasolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobretasaAlaGasolinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobretasaAlaGasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

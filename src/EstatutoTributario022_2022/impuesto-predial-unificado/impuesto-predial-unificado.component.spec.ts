import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoPredialUnificadoComponent } from './impuesto-predial-unificado.component';

describe('ImpuestoPredialUnificadoComponent', () => {
  let component: ImpuestoPredialUnificadoComponent;
  let fixture: ComponentFixture<ImpuestoPredialUnificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoPredialUnificadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoPredialUnificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

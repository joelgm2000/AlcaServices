import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoAlServicioAlumbradoPublicoComponent } from './impuesto-al-servicio-alumbrado-publico.component';

describe('ImpuestoAlServicioAlumbradoPublicoComponent', () => {
  let component: ImpuestoAlServicioAlumbradoPublicoComponent;
  let fixture: ComponentFixture<ImpuestoAlServicioAlumbradoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoAlServicioAlumbradoPublicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoAlServicioAlumbradoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

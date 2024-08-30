import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoPublicidadExteriorVisualComponent } from './impuesto-publicidad-exterior-visual.component';

describe('ImpuestoPublicidadExteriorVisualComponent', () => {
  let component: ImpuestoPublicidadExteriorVisualComponent;
  let fixture: ComponentFixture<ImpuestoPublicidadExteriorVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoPublicidadExteriorVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoPublicidadExteriorVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

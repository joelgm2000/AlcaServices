import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoIndustriaYComercioComponent } from './impuesto-industria-ycomercio.component';

describe('ImpuestoIndustriaYComercioComponent', () => {
  let component: ImpuestoIndustriaYComercioComponent;
  let fixture: ComponentFixture<ImpuestoIndustriaYComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoIndustriaYComercioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoIndustriaYComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

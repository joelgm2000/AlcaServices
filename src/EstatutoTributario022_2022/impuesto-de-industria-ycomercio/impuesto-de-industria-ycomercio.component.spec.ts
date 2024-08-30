import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoDeIndustriaYComercioComponent } from './impuesto-de-industria-ycomercio.component';

describe('ImpuestoDeIndustriaYComercioComponent', () => {
  let component: ImpuestoDeIndustriaYComercioComponent;
  let fixture: ComponentFixture<ImpuestoDeIndustriaYComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoDeIndustriaYComercioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoDeIndustriaYComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

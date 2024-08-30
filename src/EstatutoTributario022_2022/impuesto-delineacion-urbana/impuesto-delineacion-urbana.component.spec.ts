import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoDelineacionUrbanaComponent } from './impuesto-delineacion-urbana.component';

describe('ImpuestoDelineacionUrbanaComponent', () => {
  let component: ImpuestoDelineacionUrbanaComponent;
  let fixture: ComponentFixture<ImpuestoDelineacionUrbanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoDelineacionUrbanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoDelineacionUrbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

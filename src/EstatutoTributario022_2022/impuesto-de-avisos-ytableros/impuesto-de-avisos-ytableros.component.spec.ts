import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoDeAvisosYTablerosComponent } from './impuesto-de-avisos-ytableros.component';

describe('ImpuestoDeAvisosYTablerosComponent', () => {
  let component: ImpuestoDeAvisosYTablerosComponent;
  let fixture: ComponentFixture<ImpuestoDeAvisosYTablerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoDeAvisosYTablerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoDeAvisosYTablerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

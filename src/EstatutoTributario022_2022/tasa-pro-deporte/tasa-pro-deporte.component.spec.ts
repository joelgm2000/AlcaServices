import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaProDeporteComponent } from './tasa-pro-deporte.component';

describe('TasaProDeporteComponent', () => {
  let component: TasaProDeporteComponent;
  let fixture: ComponentFixture<TasaProDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasaProDeporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasaProDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

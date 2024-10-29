import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeguelloDeGanadoMenorComponent } from './deguello-de-ganado-menor.component';

describe('DeguelloDeGanadoMenorComponent', () => {
  let component: DeguelloDeGanadoMenorComponent;
  let fixture: ComponentFixture<DeguelloDeGanadoMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeguelloDeGanadoMenorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeguelloDeGanadoMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

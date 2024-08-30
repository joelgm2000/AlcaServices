import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonopolioDeJuegoDeSuerteYAzarComponent } from './monopolio-de-juego-de-suerte-yazar.component';

describe('MonopolioDeJuegoDeSuerteYAzarComponent', () => {
  let component: MonopolioDeJuegoDeSuerteYAzarComponent;
  let fixture: ComponentFixture<MonopolioDeJuegoDeSuerteYAzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonopolioDeJuegoDeSuerteYAzarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonopolioDeJuegoDeSuerteYAzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

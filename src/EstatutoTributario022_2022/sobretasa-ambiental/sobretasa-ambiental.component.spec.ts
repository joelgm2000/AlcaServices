import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobretasaAmbientalComponent } from './sobretasa-ambiental.component';

describe('SobretasaAmbientalComponent', () => {
  let component: SobretasaAmbientalComponent;
  let fixture: ComponentFixture<SobretasaAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobretasaAmbientalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobretasaAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

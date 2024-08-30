import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionPlusValiaComponent } from './participacion-plus-valia.component';

describe('ParticipacionPlusValiaComponent', () => {
  let component: ParticipacionPlusValiaComponent;
  let fixture: ComponentFixture<ParticipacionPlusValiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipacionPlusValiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionPlusValiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

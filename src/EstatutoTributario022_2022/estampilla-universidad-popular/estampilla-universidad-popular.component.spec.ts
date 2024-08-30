import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampillaUniversidadPopularComponent } from './estampilla-universidad-popular.component';

describe('EstampillaUniversidadPopularComponent', () => {
  let component: EstampillaUniversidadPopularComponent;
  let fixture: ComponentFixture<EstampillaUniversidadPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstampillaUniversidadPopularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstampillaUniversidadPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

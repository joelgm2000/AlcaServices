import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampillaProCulturaComponent } from './estampilla-pro-cultura.component';

describe('EstampillaProCulturaComponent', () => {
  let component: EstampillaProCulturaComponent;
  let fixture: ComponentFixture<EstampillaProCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstampillaProCulturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstampillaProCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

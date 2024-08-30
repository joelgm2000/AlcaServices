import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampullaProCulturaComponent } from './estampulla-pro-cultura.component';

describe('EstampullaProCulturaComponent', () => {
  let component: EstampullaProCulturaComponent;
  let fixture: ComponentFixture<EstampullaProCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstampullaProCulturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstampullaProCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

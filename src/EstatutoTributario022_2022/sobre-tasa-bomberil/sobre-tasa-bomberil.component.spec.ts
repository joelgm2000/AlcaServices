import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTasaBomberilComponent } from './sobre-tasa-bomberil.component';

describe('SobreTasaBomberilComponent', () => {
  let component: SobreTasaBomberilComponent;
  let fixture: ComponentFixture<SobreTasaBomberilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreTasaBomberilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreTasaBomberilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

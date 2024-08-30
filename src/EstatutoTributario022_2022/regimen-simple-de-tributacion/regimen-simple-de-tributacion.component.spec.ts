import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimenSimpleDeTributacionComponent } from './regimen-simple-de-tributacion.component';

describe('RegimenSimpleDeTributacionComponent', () => {
  let component: RegimenSimpleDeTributacionComponent;
  let fixture: ComponentFixture<RegimenSimpleDeTributacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegimenSimpleDeTributacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimenSimpleDeTributacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

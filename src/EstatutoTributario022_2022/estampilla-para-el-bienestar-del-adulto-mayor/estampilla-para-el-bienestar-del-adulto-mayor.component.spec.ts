import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampillaParaElBienestarDelAdultoMayorComponent } from './estampilla-para-el-bienestar-del-adulto-mayor.component';

describe('EstampillaParaElBienestarDelAdultoMayorComponent', () => {
  let component: EstampillaParaElBienestarDelAdultoMayorComponent;
  let fixture: ComponentFixture<EstampillaParaElBienestarDelAdultoMayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstampillaParaElBienestarDelAdultoMayorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstampillaParaElBienestarDelAdultoMayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

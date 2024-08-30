import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoEspectaculosPublicosComponent } from './impuesto-espectaculos-publicos.component';

describe('ImpuestoEspectaculosPublicosComponent', () => {
  let component: ImpuestoEspectaculosPublicosComponent;
  let fixture: ComponentFixture<ImpuestoEspectaculosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoEspectaculosPublicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoEspectaculosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

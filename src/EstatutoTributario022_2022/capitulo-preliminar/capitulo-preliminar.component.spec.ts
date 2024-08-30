import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloPreliminarComponent } from './capitulo-preliminar.component';

describe('CapituloPreliminarComponent', () => {
  let component: CapituloPreliminarComponent;
  let fixture: ComponentFixture<CapituloPreliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloPreliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloPreliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

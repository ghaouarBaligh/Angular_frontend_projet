import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailMvtStkComponent } from './dtail-mvt-stk.component';

describe('DtailMvtStkComponent', () => {
  let component: DtailMvtStkComponent;
  let fixture: ComponentFixture<DtailMvtStkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtailMvtStkComponent]
    });
    fixture = TestBed.createComponent(DtailMvtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

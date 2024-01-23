import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvtStkComponent } from './page-mvt-stk.component';

describe('PageMvtStkComponent', () => {
  let component: PageMvtStkComponent;
  let fixture: ComponentFixture<PageMvtStkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMvtStkComponent]
    });
    fixture = TestBed.createComponent(PageMvtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

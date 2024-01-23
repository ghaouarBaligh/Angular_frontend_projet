import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtBtnComponent } from './mvt-btn.component';

describe('MvtBtnComponent', () => {
  let component: MvtBtnComponent;
  let fixture: ComponentFixture<MvtBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MvtBtnComponent]
    });
    fixture = TestBed.createComponent(MvtBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

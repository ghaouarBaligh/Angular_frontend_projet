import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColMvtComponent } from './col-mvt.component';

describe('ColMvtComponent', () => {
  let component: ColMvtComponent;
  let fixture: ComponentFixture<ColMvtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColMvtComponent]
    });
    fixture = TestBed.createComponent(ColMvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

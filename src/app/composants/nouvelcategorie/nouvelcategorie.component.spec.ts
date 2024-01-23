import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelcategorieComponent } from './nouvelcategorie.component';

describe('NouvelcategorieComponent', () => {
  let component: NouvelcategorieComponent;
  let fixture: ComponentFixture<NouvelcategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelcategorieComponent]
    });
    fixture = TestBed.createComponent(NouvelcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

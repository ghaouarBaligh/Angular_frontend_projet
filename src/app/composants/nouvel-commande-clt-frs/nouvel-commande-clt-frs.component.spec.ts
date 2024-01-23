import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCommandeCltFrsComponent } from './nouvel-commande-clt-frs.component';

describe('NouvelCommandeCltFrsComponent', () => {
  let component: NouvelCommandeCltFrsComponent;
  let fixture: ComponentFixture<NouvelCommandeCltFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelCommandeCltFrsComponent]
    });
    fixture = TestBed.createComponent(NouvelCommandeCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

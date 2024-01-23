import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonNouvelArticleComponent } from './boutton-nouvel-article.component';

describe('BouttonNouvelArticleComponent', () => {
  let component: BouttonNouvelArticleComponent;
  let fixture: ComponentFixture<BouttonNouvelArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouttonNouvelArticleComponent]
    });
    fixture = TestBed.createComponent(BouttonNouvelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

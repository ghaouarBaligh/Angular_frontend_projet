import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNouvelArticleComponent } from './detail-nouvel-article.component';

describe('DetailNouvelArticleComponent', () => {
  let component: DetailNouvelArticleComponent;
  let fixture: ComponentFixture<DetailNouvelArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailNouvelArticleComponent]
    });
    fixture = TestBed.createComponent(DetailNouvelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

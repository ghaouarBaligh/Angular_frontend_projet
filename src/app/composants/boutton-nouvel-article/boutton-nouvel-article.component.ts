import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-nouvel-article',
  templateUrl: './boutton-nouvel-article.component.html',
  styleUrls: ['./boutton-nouvel-article.component.scss']
})
export class BouttonNouvelArticleComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {}

  navigateToarticle(){
    this.router.navigate(['/articles'])
  }
}

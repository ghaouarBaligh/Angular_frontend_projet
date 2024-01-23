import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router:Router){}
  navigateToarticle(){
    this.router.navigate(['/articles'])
  }

}

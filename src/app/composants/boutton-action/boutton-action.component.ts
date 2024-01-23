import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
  
  @Output()
  clickEvent=new EventEmitter();


  ngOnInit(): void {}  

  constructor(private router: Router) { }

  navigateToNouvelArticle() {
    this.router.navigate(['/nouvelarticle']);
  }

}



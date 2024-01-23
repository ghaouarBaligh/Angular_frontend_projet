import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  

  constructor(private router:Router){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateToNouvelCategorie():void{
    this.router.navigate(['/nouvelcategorie']);
  }


}

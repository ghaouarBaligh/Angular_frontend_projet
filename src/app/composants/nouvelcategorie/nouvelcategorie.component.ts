import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelcategorie',
  templateUrl: './nouvelcategorie.component.html',
  styleUrls: ['./nouvelcategorie.component.scss']
})
export class NouvelcategorieComponent {

  constructor(private router:Router){}
  navigateTo(){
    this.router.navigate(['/categories'])
  }

}

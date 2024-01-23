import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router:Router){}

  navigateToNouvelArticle(){
    this.router.navigate(['/nouvelutilisateur'])
  }

}

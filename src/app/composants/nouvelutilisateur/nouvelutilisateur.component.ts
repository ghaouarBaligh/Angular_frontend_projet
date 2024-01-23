import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelutilisateur',
  templateUrl: './nouvelutilisateur.component.html',
  styleUrls: ['./nouvelutilisateur.component.scss']
})
export class NouvelutilisateurComponent {

  constructor(private router:Router){}
  navigateTo(){
    this.router.navigate(['/utilisateurs'])
  }





}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {}

  changerMotDePasseUtilisateur(){
    this.router.navigate(['/changermdp'])
  }
}

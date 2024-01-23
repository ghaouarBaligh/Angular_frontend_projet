import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.scss']
})
export class ChangerMdpComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router:Router){}

  cancel(): void {
    this.router.navigate(['/profil']);
  }
  changerMotDePasseUtilisateur(){}

}

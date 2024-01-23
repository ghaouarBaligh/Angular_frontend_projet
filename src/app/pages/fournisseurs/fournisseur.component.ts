import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  origin='';

  constructor(private router:Router,private activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.data.subscribe(data=>{
      this.origin=data['origin']
    });
  }


  navigateToNouvel(){
    this.router.navigate(['/nouvelfournisseur'])
  }

}

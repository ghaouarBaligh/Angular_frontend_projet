import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-commande-clt-frs',
  templateUrl: './nouvel-commande-clt-frs.component.html',
  styleUrls: ['./nouvel-commande-clt-frs.component.scss']
})
export class NouvelCommandeCltFrsComponent {

  origin='';

  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=>{
      this.origin=data['origin'];
    })
  }


  navigateTonouvelcommandecltfrs(){
    this.router.navigate(['/nouvelcommandecltfrs'])
  }

}

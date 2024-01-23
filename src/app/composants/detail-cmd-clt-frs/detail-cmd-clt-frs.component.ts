import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {

  origin='';

  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=>{
      this.origin=data['origin'];
    })
  }


  navigateTonouvelcommande(){
    if (this.origin === 'client') {
      this.router.navigate(['nouvelcommandeclt']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouvelcommandefrs']);
    }
  }


}

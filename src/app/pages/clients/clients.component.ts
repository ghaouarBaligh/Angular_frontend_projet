import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  origin='';

  constructor(private router:Router,private activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.data.subscribe(data=>{
      this.origin=data['origin']
    });
  }


  navigateToNouvel(){
    this.router.navigate(['/nouvelclient'])
  }

}

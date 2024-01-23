import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-col-mvt',
  templateUrl: './col-mvt.component.html',
  styleUrls: ['./col-mvt.component.scss']
})
export class ColMvtComponent {

  constructor(private router: Router) { }

  redirectToCorrection() {
    this.router.navigate(['/correction']);
  }

}

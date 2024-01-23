import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {}
  navigateTomvtstk(){
    this.router.navigate(['/mvt-stk'])
  }

}

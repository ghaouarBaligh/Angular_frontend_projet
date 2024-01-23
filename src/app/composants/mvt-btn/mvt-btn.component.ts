import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mvt-btn',
  templateUrl: './mvt-btn.component.html',
  styleUrls: ['./mvt-btn.component.scss']
})
export class MvtBtnComponent {

  @Input()
  isExporterVisible=false;
  
  @Input()
  isImporterVisible=true;

}

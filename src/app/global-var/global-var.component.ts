import { Component } from '@angular/core';

@Component({
  selector: 'app-global-var',
  templateUrl: './global-var.component.html',
  styleUrls: ['./global-var.component.scss']
})
export class GlobalVarComponent {


  public static cusId = 1;
  public static trpId = 2;



}


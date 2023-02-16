import { Component } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent {



evenNum=[


  {"num":1},
  {"num":2},
  {"num":3},
  {"num":4},
  {"num":5},
  {"num":6},
  {"num":7},
  {"num":8},
  {"num":9},
  {"num":10},
  {"num":11},
  {"num":12},
  {"num":13},
  {"num":14},
  {"num":15},
  {"num":16},
  {"num":17},
  {"num":18},
  {"num":19},
  {"num":20},

];






  even() {

   for(let i=0 ; i<=this.evenNum.length; i++){
    if((this.evenNum[i].num%2)===0){
      console.log(this.evenNum[i].num);
    }

   }



 }
 







}

import { Component } from '@angular/core';
import { CalibrationService } from './calibration.service';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent {

    //  Calibration:any = ['2x', '3x', '4x', '8x'];
    //   Instruments:any = ['microscope', 'spectrometer', 'camera', 'laser'];

     Calibration=[
      { "id":1, "name":"2x" },
      { "id":2, "name":"3x" },
      { "id":3, "name":"4x" },
      { "id":4, "name":"8x" },
      { "id":5, "name":"10x" },
      { "id":6, "name":"12x" },
      { "id":7, "name":"16x" },
      { "id":8, "name":"20x" },
      { "id":9, "name":"24x" },
      { "id":10, "name":"32x" },]

       Instruments=[
      { "id":1, "name":"microscope" },
      { "id":2, "name":"spectrometer" },
      { "id":3, "name":"camera" },
      { "id":4, "name":"laser" },
    ]
    constructor(private calibrationService : CalibrationService) { }

      calibrationForm = new FormGroup({
      calibrationData: new FormControl(''),
      instrumentData: new FormControl(''),

    })

    calData(){
      console.log('form');
      // console.log(this.calibrationForm.value);
      // console.log(JSON.stringify(this.calibrationForm.value));
      this.calibrationService.calData(this.calibrationForm.value).subscribe((response:any)=>{
        console.log(response);
      })

      }
    }

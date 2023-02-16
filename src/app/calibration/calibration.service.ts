import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {

  constructor(private http:HttpClient) { }

  public calData(calibration:any):Observable<any>{



    const url='https://reqres.in/api/users';
    return this.http.post<any>(url,calibration);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private http: HttpClient) { }

 public getDriveData(cusId:any,trpId:any):Observable<any>{


  const url = 'http://easeyourdrive.com:8080/getTrips';
  // let queryParams = new HttpParams();
  // queryParams = queryParams.append('cusId', '1');
  return this.http.get<any>(url, {params: {cusId: cusId,
                                            trpId: trpId}});


 }

}

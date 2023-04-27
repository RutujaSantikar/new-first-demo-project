import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }



  public  loginUser(user:any):Observable<any>{


    // const url='http://welltracker.techlead-india.com:8080/authenticateUser?usrName='+user.username+'&usrPassword='+user.password+'';
    // // const url ='http://welltracker.techlead-india.com:8080/authenticateUser?usrName=&usrPassword=';
    // return this.http.get<any>(url);

    const url = "https://reqres.in/api/users?user=" + user.username + "&password=" + user.password + "";
    return this.http.get<any>(url);



  }


}

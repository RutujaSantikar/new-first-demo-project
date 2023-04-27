import { Component} from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {
   username="";
   password="";

  btnstate: boolean = false;
  constructor(private loginService : LoginService, private router: Router) { }

   loginUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
   })






   loginUser():any{
     console.log('form');
     const username = this.loginUserForm.value;
     const password = this.loginUserForm.value;

     this.btnstate = true;
      this.loginService.loginUser(this.loginUserForm.value).subscribe((response : any) =>{
       console.log(response );
       this.router.navigate(['/dashboard']);


     })
   }


}

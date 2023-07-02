import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import { RegistrationServiceService } from '../registration-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private _service : RegistrationServiceService){}
  redirectToLandingPage() {
    this.router.navigate(['/']);
  }
  user = new User();
  msg = '';
  loginUser()
  {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        //this._guard.isLoggedIn = true;
        this.router.navigate(['loginsucces']);
      } ,
      () => {
        console.log("exception occured")
        //this._guard.isLoggedIn = false;
        this.msg="Invalid credentials. Please enter valid email and password";
      }
    )
  }
  gotoRegistration()
  {
    this.router.navigate(['/registration']);
  }
}

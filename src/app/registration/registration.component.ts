import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import {NgForm} from '@angular/forms'
import { RegistrationServiceService } from '../registration-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private router: Router, private _service : RegistrationServiceService) {}
  redirectToLandingPage() {
    this.router.navigate(['/']);
  }
  msg=''
  user = new User();
  confirmPassword = '';
  registerUser()
  {
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.msg="Registration succesful";
        this.router.navigate(['login']);
      },
      error =>{
        console.log("exception occured");
        this.msg=error;
      }
    )
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8090/login",user);
  }
  public  registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/registeruser",user);
  }
}

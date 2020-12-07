import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

class SignUp {
}

@Injectable({
  providedIn: 'root'
})
export class FormloginService {
  //API LOCAL
  // private API_SIGNUP = environment.API_LOCAL+'signup';

  //API SERVER
  private API_SIGNUP = environment.API_SERVER+'signup';
  constructor(private http: HttpClient) { }
  signUp(signup: SignUp): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signup);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Auth, getAuth, GoogleAuthProvider} from 'firebase/auth';


import { AngularFireAuth } from '@angular/fire/compat/auth';
//import {user } from  'firebase';



import { Observable } from 'rxjs';
import { LoginUserDto } from '../models/login-user.dto';
import { NewUserDto } from '../models/new-user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  authURL = 'http://localhost:8000/api/auth';

  constructor(private httpClient: HttpClient,public afAuth:AngularFireAuth) { }


  login(dto: LoginUserDto): Observable<any> {
    return this.httpClient.post(this.authURL+'/login', dto);
  }

  register(dto: NewUserDto): Observable<any> {
    return this.httpClient.post(this.authURL+'/nuevo', dto);
  }

  registerAdviser(dto: NewUserDto): Observable<any> {
    return this.httpClient.post(this.authURL+'/adviser/nuevo', dto);
  }

}
